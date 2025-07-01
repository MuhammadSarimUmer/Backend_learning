// Register form functionality
document.addEventListener('DOMContentLoaded', function() {
    // Form elements
    const registerForm = document.getElementById('registerForm');
    const fullnameInput = document.getElementById('fullname');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const agreeTermsCheckbox = document.getElementById('agreeTerms');
    const registerBtn = document.getElementById('registerBtn');
    const spinner = document.getElementById('spinner');
    const btnText = document.querySelector('.btn-text');
    
    // Error message elements
    const fullnameError = document.getElementById('fullnameError');
    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    
    // Password strength elements
    const passwordStrength = document.getElementById('passwordStrength');
    const strengthFill = document.getElementById('strengthFill');
    const strengthText = document.getElementById('strengthText');
    
    // Social login buttons
    const googleBtn = document.getElementById('googleBtn');
    const facebookBtn = document.getElementById('facebookBtn');
    
    // Validation patterns
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const usernamePattern = /^[a-zA-Z0-9_]{3,20}$/;
    const namePattern = /^[a-zA-Z\s]{2,50}$/;
    
    // Debounce timer for username checking
    let usernameCheckTimer;
    
    // Real-time validation
    fullnameInput.addEventListener('blur', validateFullname);
    fullnameInput.addEventListener('input', clearFullnameError);
    
    usernameInput.addEventListener('blur', validateUsername);
    usernameInput.addEventListener('input', handleUsernameInput);
    
    emailInput.addEventListener('blur', validateEmail);
    emailInput.addEventListener('input', clearEmailError);
    
    passwordInput.addEventListener('input', handlePasswordInput);
    passwordInput.addEventListener('blur', validatePassword);
    
    confirmPasswordInput.addEventListener('blur', validateConfirmPassword);
    confirmPasswordInput.addEventListener('input', clearConfirmPasswordError);
    
    agreeTermsCheckbox.addEventListener('change', validateTerms);
    
    // Form submission
    registerForm.addEventListener('submit', handleFormSubmit);
    
    // Social login handlers
    googleBtn.addEventListener('click', handleGoogleRegister);
    facebookBtn.addEventListener('click', handleFacebookRegister);
    
    // Full name validation
    function validateFullname() {
        const fullname = fullnameInput.value.trim();
        
        if (!fullname) {
            showError(fullnameInput, fullnameError, 'Full name is required');
            return false;
        }
        
        if (!namePattern.test(fullname)) {
            showError(fullnameInput, fullnameError, 'Please enter a valid full name (2-50 characters, letters only)');
            return false;
        }
        
        showSuccess(fullnameInput, fullnameError);
        return true;
    }
    
    // Username validation
    function validateUsername() {
        const username = usernameInput.value.trim().toLowerCase();
        
        if (!username) {
            showError(usernameInput, usernameError, 'Username is required');
            return false;
        }
        
        if (!usernamePattern.test(username)) {
            showError(usernameInput, usernameError, 'Username must be 3-20 characters (letters, numbers, underscore only)');
            return false;
        }
        
        // Check availability (this would typically be an API call)
        checkUsernameAvailability(username);
        return true;
    }
    
    // Handle username input with debouncing
    function handleUsernameInput() {
        clearError(usernameInput, usernameError);
        
        clearTimeout(usernameCheckTimer);
        const username = usernameInput.value.trim().toLowerCase();
        
        if (username.length >= 3 && usernamePattern.test(username)) {
            usernameCheckTimer = setTimeout(() => {
                checkUsernameAvailability(username);
            }, 500);
        }
    }
    
    // Check username availability (simulated)
    async function checkUsernameAvailability(username) {
        try {
            // Show checking state
            showUsernameChecking();
            
            // Simulate API call
            const response = await fetch(`/api/check-username/${username}`);
            const result = await response.json();
            
            if (result.available) {
                showUsernameAvailable();
            } else {
                showError(usernameInput, usernameError, 'Username is already taken');
            }
        } catch (error) {
            // If API fails, continue without blocking
            console.warn('Username check failed:', error);
        }
    }
    
    // Email validation
    function validateEmail() {
        const email = emailInput.value.trim();
        
        if (!email) {
            showError(emailInput, emailError, 'Email is required');
            return false;
        }
        
        if (!emailPattern.test(email)) {
            showError(emailInput, emailError, 'Please enter a valid email address');
            return false;
        }
        
        showSuccess(emailInput, emailError);
        return true;
    }
    
    // Password validation and strength checking
    function validatePassword() {
        const password = passwordInput.value;
        
        if (!password) {
            showError(passwordInput, passwordError, 'Password is required');
            return false;
        }
        
        if (password.length < 8) {
            showError(passwordInput, passwordError, 'Password must be at least 8 characters');
            return false;
        }
        
        const strength = calculatePasswordStrength(password);
        if (strength < 2) {
            showError(passwordInput, passwordError, 'Password is too weak. Add numbers, symbols, or mix case.');
            return false;
        }
        
        showSuccess(passwordInput, passwordError);
        return true;
    }
    
    // Handle password input for real-time strength checking
    function handlePasswordInput() {
        const password = passwordInput.value;
        clearError(passwordInput, passwordError);
        
        if (password.length > 0) {
            updatePasswordStrength(password);
        } else {
            hidePasswordStrength();
        }
        
        // Revalidate confirm password if it has a value
        if (confirmPasswordInput.value) {
            validateConfirmPassword();
        }
    }
    
    // Calculate password strength
    function calculatePasswordStrength(password) {
        let score = 0;
        
        // Length
        if (password.length >= 8) score++;
        if (password.length >= 12) score++;
        
        // Character types
        if (/[a-z]/.test(password)) score++;
        if (/[A-Z]/.test(password)) score++;
        if (/[0-9]/.test(password)) score++;
        if (/[^A-Za-z0-9]/.test(password)) score++;
        
        return Math.min(score, 4);
    }
    
    // Update password strength indicator
    function updatePasswordStrength(password) {
        const strength = calculatePasswordStrength(password);
        const strengthLevels = ['', 'weak', 'fair', 'good', 'strong'];
        const strengthTexts = ['', 'Weak', 'Fair', 'Good', 'Strong'];
        
        strengthFill.className = `strength-fill ${strengthLevels[strength]}`;
        strengthText.className = `strength-text ${strengthLevels[strength]}`;
        strengthText.textContent = strengthTexts[strength];
        
        passwordStrength.style.display = 'block';
    }
    
    // Hide password strength indicator
    function hidePasswordStrength() {
        passwordStrength.style.display = 'none';
    }
    
    // Confirm password validation
    function validateConfirmPassword() {
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        
        if (!confirmPassword) {
            showError(confirmPasswordInput, confirmPasswordError, 'Please confirm your password');
            return false;
        }
        
        if (password !== confirmPassword) {
            showError(confirmPasswordInput, confirmPasswordError, 'Passwords do not match');
            return false;
        }
        
        showSuccess(confirmPasswordInput, confirmPasswordError);
        return true;
    }
    
    // Terms validation
    function validateTerms() {
        if (!agreeTermsCheckbox.checked) {
            showNotification('You must agree to the Terms of Service to continue', 'error');
            return false;
        }
        return true;
    }
    
    // Clear error states
    function clearFullnameError() {
        clearError(fullnameInput, fullnameError);
    }
    
    function clearEmailError() {
        clearError(emailInput, emailError);
    }
    
    function clearConfirmPasswordError() {
        clearError(confirmPasswordInput, confirmPasswordError);
    }
    
    // Show username checking state
    function showUsernameChecking() {
        const indicator = getOrCreateUsernameIndicator();
        indicator.textContent = '⏳';
        indicator.className = 'username-check username-checking';
    }
    
    // Show username available state
    function showUsernameAvailable() {
        const indicator = getOrCreateUsernameIndicator();
        indicator.textContent = '✓';
        indicator.className = 'username-check username-available';
        showSuccess(usernameInput, usernameError);
    }
    
    // Get or create username indicator
    function getOrCreateUsernameIndicator() {
        let indicator = usernameInput.parentElement.querySelector('.username-check');
        if (!indicator) {
            indicator = document.createElement('span');
            indicator.className = 'username-check';
            usernameInput.parentElement.appendChild(indicator);
        }
        return indicator;
    }
    
    // Show error state
    function showError(input, errorElement, message) {
        input.classList.add('error');
        input.classList.remove('success');
        errorElement.textContent = message;
        
        // Add shake animation
        input.parentElement.classList.add('shake');
        setTimeout(() => {
            input.parentElement.classList.remove('shake');
        }, 500);
    }
    
    // Show success state
    function showSuccess(input, errorElement) {
        input.classList.add('success');
        input.classList.remove('error');
        errorElement.textContent = '';
    }
    
    // Clear error state
    function clearError(input, errorElement) {
        input.classList.remove('error');
        if (input.value.trim()) {
            input.classList.add('success');
        } else {
            input.classList.remove('success');
        }
        errorElement.textContent = '';
    }
})
    
    // Handle form submission