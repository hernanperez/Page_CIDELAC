document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('contact-form');
            const inputs = form.querySelectorAll('input, textarea');
            const submitButton = form.querySelector('.cta-button');
            
            // Validación en tiempo real
            inputs.forEach(input => {
                input.addEventListener('blur', function() {
                    validateField(this);
                });
                
                input.addEventListener('input', function() {
                    clearValidation(this);
                });
            });
            
            // Envío del formulario
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                let isValid = true;
                inputs.forEach(input => {
                    if (!validateField(input)) {
                        isValid = false;
                    }
                });
                
                if (isValid) {
                    submitForm();
                }
            });
            
            function validateField(field) {
                const wrapper = field.closest('.input-wrapper');
                const value = field.value.trim();
                
                // Limpiar validaciones previas
                clearValidation(field);
                
                if (!value) {
                    setError(wrapper);
                    return false;
                }
                
                // Validación específica para email
                if (field.type === 'email') {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(value)) {
                        setError(wrapper);
                        return false;
                    }
                }
                
                // Validación específica para teléfono
                if (field.type === 'tel') {
                    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
                    if (!phoneRegex.test(value) || value.length < 7) {
                        setError(wrapper);
                        return false;
                    }
                }
                
                setSuccess(wrapper);
                return true;
            }
            
            function setError(wrapper) {
                wrapper.classList.remove('success');
                wrapper.classList.add('error');
            }
            
            function setSuccess(wrapper) {
                wrapper.classList.remove('error');
                wrapper.classList.add('success');
            }
            
            function clearValidation(field) {
                const wrapper = field.closest('.input-wrapper');
                wrapper.classList.remove('error', 'success');
            }
            
            function submitForm() {
                submitButton.classList.add('loading');
                submitButton.textContent = 'Enviando...';
                
                // Simulación de envío (reemplaza con tu lógica real)
                setTimeout(() => {
                    submitButton.classList.remove('loading');
                    submitButton.textContent = '¡Mensaje Enviado!';
                    submitButton.style.background = 'linear-gradient(135deg, #27ae60, #2ecc71)';
                    
                    // Reset después de 3 segundos
                    setTimeout(() => {
                        form.reset();
                        inputs.forEach(input => clearValidation(input));
                        submitButton.textContent = 'Enviar Mensaje';
                        submitButton.style.background = 'linear-gradient(135deg, #078C03, #4CAF50)';
                    }, 3000);
                }, 2000);
            }
            
            // Efecto de ripple en el botón
            submitButton.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    background: rgba(255, 255, 255, 0.3);
                    border-radius: 50%;
                    transform: scale(0);
                    animation: ripple 0.6s ease-out;
                    pointer-events: none;
                `;
                
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
            
            // Agregar keyframes para el ripple
            const style = document.createElement('style');
            style.textContent = `
                @keyframes ripple {
                    to {
                        transform: scale(2);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        });