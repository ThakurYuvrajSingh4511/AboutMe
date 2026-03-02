// TRISHUL Cybersecurity Toolkit - Premium Startup Landing Page JavaScript

// Team member data for modal
const teamMembers = {
    yuvraj: {
        name: "Yuvraj Singh",
        role: "Captain & Lead Developer",
        image: "Krish.jpeg",
        bio: "Founder and system architect of TRISHUL. Led complete design and development lifecycle of cybersecurity toolkit. Engineered core multi-layered security architecture including Scanner, Shield, Stego, and AI Guardian modules. Integrated AI-based threat detection logic and optimized backend communication flow. Managed final build assembly, system optimization, and deployment readiness.",
        contributions: [
            "Designed complete cybersecurity framework",
            "Integrated AI threat detection modules",
            "Developed backend logic & API structure",
            "Implemented real-time security flow",
            "Finalized build & performance optimization"
        ],
        skills: ["Android Development", "API Integration", "AI Systems", "Cybersecurity Logic", "Architecture Design"]
    },
    divyansh: {
        name: "Divyansh",
        role: "Vice Captain & API Lead",
        image: "divyansh.jpeg",
        bio: "Led technical research and API intelligence planning for TRISHUL. Structured backend communication systems and supported AI service integration. Conducted research on threat intelligence mechanisms and assisted in implementing secure request-response workflows across modules.",
        contributions: [
            "API workflow research & planning",
            "Backend logic structuring",
            "Security intelligence validation",
            "AI integration support"
        ],
        skills: ["API Research", "Backend Systems", "Cloud Services", "Security Analysis"]
    },
    asfi: {
        name: "Asfi",
        role: "Time Keeper & UI/UX Designer",
        image: "asfi.jpeg",
        bio: "Designed cyberpunk visual identity of TRISHUL. Created logo, splash screen, and dashboard interface. Ensured visual consistency, readability, and professional cybersecurity aesthetics. Balanced futuristic design with practical usability.",
        contributions: [
            "Designed logo & branding identity",
            "Created dashboard layout",
            "Implemented cyber theme UI",
            "Maintained visual consistency"
        ],
        skills: ["UI/UX Design", "Branding", "Interface Structuring", "Cyber Aesthetic"]
    },
    alok: {
        name: "Alok",
        role: "Planner & QA Tester",
        image: "alok.jpeg",
        bio: "Responsible for application testing and quality assurance. Conducted real-device testing for permission audits and scanning modules. Collected phishing datasets and validated detection accuracy across multiple scenarios.",
        contributions: [
            "Application testing & QA",
            "Permission audit validation",
            "Phishing dataset collection",
            "Detection accuracy testing"
        ],
        skills: ["Testing", "Quality Assurance", "Data Analysis", "Validation"]
    },
    abhigyan: {
        name: "Abhigyan",
        role: "Coordinator & Documentation Lead",
        image: "abhigyan.jpeg",
        bio: "Managed research documentation and structured theoretical cybersecurity foundation of TRISHUL. Conducted research on Android dangerous permissions and privacy risk models. Developed project synopsis and technical blackbook documentation.",
        contributions: [
            "Research documentation management",
            "Android permissions analysis",
            "Privacy risk modeling",
            "Technical documentation creation"
        ],
        skills: ["Documentation", "Research Analysis", "Security Modeling", "Technical Writing"]
    }
};

// Gmail contact function
function openGmail() {
    window.open('mailto:Krishna9336singh@gmail.com', '_blank');
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeParticles();
    initializeAnimations();
    initializeInteractions();
    initializeScrollEffects();
    initializeLogoAnimation();
    initializeModuleAnimations();
});

// Create floating glow particles
function initializeParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (8 + Math.random() * 4) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Initialize scroll-triggered animations
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 200); // One-by-one appearance for team cards
            }
        });
    }, observerOptions);

    // Observe module cards
    document.querySelectorAll('.module-card').forEach(card => {
        observer.observe(card);
    });

    // Observe team cards (vertical scroll, one-by-one)
    document.querySelectorAll('.team-card').forEach(card => {
        observer.observe(card);
    });
}

// Initialize interactive elements
function initializeInteractions() {
    // Module card interactions
    document.querySelectorAll('.module-card').forEach(card => {
        card.addEventListener('click', function() {
            handleModuleClick(this);
        });

        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Team card interactions
    document.querySelectorAll('.team-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.01)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Skill tag hover effects
    document.querySelectorAll('.skill-tag').forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 20px rgba(0, 255, 156, 0.6)';
        });

        tag.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
    });
}

// Handle module card clicks
function handleModuleClick(card) {
    const moduleTitle = card.querySelector('.module-title').textContent;
    
    // Add click animation
    card.style.transform = 'translateY(-10px) scale(0.98)';
    setTimeout(() => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    }, 150);

    // Show module information
    console.log(`Module activated: ${moduleTitle}`);
    
    // You can add modal functionality here for detailed module information
    showModuleDetails(moduleTitle);
}

// Show module details (placeholder function)
function showModuleDetails(moduleName) {
    // This function can be expanded to show detailed module information
    console.log(`Module details: ${moduleName}`);
}

// Initialize scroll effects - DISABLED FOR MOBILE
function initializeScrollEffects() {
    // Check if mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|IEMobile/i.test(navigator.userAgent) || window.innerWidth <= 768;
    
    if (isMobile) {
        console.log('Mobile detected - scroll effects disabled');
        return; // Completely disable scroll effects on mobile
    }
    
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Dynamic glow effect based on scroll position
        document.querySelectorAll('.module-card, .team-card').forEach((card) => {
            const rect = card.getBoundingClientRect();
            const centerY = rect.top + rect.height / 2;
            const windowHeight = window.innerHeight;
            
            if (centerY >= 0 && centerY <= windowHeight) {
                const distance = Math.abs(centerY - windowHeight / 2);
                const maxDistance = windowHeight / 2;
                const intensity = 1 - (distance / maxDistance);
                
                card.style.filter = `brightness(${1 + intensity * 0.3})`;
                card.style.transform = `translateY(${Math.sin(scrollTop * 0.001 + Math.random() * Math.PI) * 2}px)`;
            }
        });
        
        lastScrollTop = scrollTop;
    });
}

// Initialize logo breathing animation
function initializeLogoAnimation() {
    const logo = document.querySelector('.logo-inner');
    if (logo) {
        // Breathing effect is handled by CSS animation
        // Add extra glow pulse on hover
        logo.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 40px rgba(0, 255, 156, 1)';
        });
        
        logo.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
        });
    }
}

// Initialize module-specific animations
function initializeModuleAnimations() {
    // Scanner module - scanning animation
    const scannerCard = document.querySelector('.module-card:nth-child(1)');
    if (scannerCard) {
        setInterval(() => {
            const statusDot = scannerCard.querySelector('.status-dot');
            if (statusDot) {
                statusDot.style.animation = 'statusPulse 2s ease-in-out infinite, scanLine 3s linear infinite';
            }
        }, 5000);
    }

    // Shield module - risk meter animation
    const shieldCard = document.querySelector('.module-card:nth-child(2)');
    if (shieldCard) {
        const riskLevel = shieldCard.querySelector('.risk-level');
        if (riskLevel) {
            // Animate risk level changes
            setTimeout(() => {
                riskLevel.style.width = '45%';
                riskLevel.className = 'risk-level medium';
                shieldCard.querySelector('.risk-text').textContent = 'Medium Risk';
            }, 3000);
            
            setTimeout(() => {
                riskLevel.style.width = '30%';
                riskLevel.className = 'risk-level low';
                shieldCard.querySelector('.risk-text').textContent = 'Low Risk';
            }, 6000);
        }
    }

    // Stego module - lock animation
    const stegoCard = document.querySelector('.module-card:nth-child(3)');
    if (stegoCard) {
        setInterval(() => {
            const lockStatus = stegoCard.querySelector('.lock-status');
            const lockIcon = stegoCard.querySelector('.lock-icon');
            
            if (lockStatus && lockIcon) {
                lockStatus.className = 'lock-status unlocked';
                lockIcon.textContent = '🔓';
                lockStatus.querySelector('span:last-child').textContent = 'Decrypted';
                
                setTimeout(() => {
                    lockStatus.className = 'lock-status locked';
                    lockIcon.textContent = '🔒';
                    lockStatus.querySelector('span:last-child').textContent = 'Encrypted';
                }, 2000);
            }
        }, 8000);
    }

    // AI Guardian module - confidence animation
    const aiCard = document.querySelector('.module-card:nth-child(4)');
    if (aiCard) {
        const confidenceValue = aiCard.querySelector('.score-value');
        if (confidenceValue) {
            setInterval(() => {
                const confidence = Math.floor(85 + Math.random() * 10);
                confidenceValue.textContent = confidence + '%';
            }, 4000);
        }
    }
}

// Profile modal functions
function openProfileModal(memberId) {
    const modal = document.getElementById('profileModal');
    const member = teamMembers[memberId];
    
    if (!member) return;
    
    // Update modal content
    document.getElementById('modalProfileImage').src = member.image;
    document.getElementById('modalMemberName').textContent = member.name;
    document.getElementById('modalMemberRole').textContent = member.role;
    document.getElementById('modalBio').textContent = member.bio;
    
    // Update contributions
    const contributionsList = document.getElementById('modalContributions');
    contributionsList.innerHTML = '';
    member.contributions.forEach(contribution => {
        const li = document.createElement('li');
        li.textContent = contribution;
        contributionsList.appendChild(li);
    });
    
    // Update skills with animation
    const skillsContainer = document.getElementById('modalSkills');
    skillsContainer.innerHTML = '';
    member.skills.forEach((skill, index) => {
        const skillTag = document.createElement('span');
        skillTag.className = 'modal-skill-tag';
        skillTag.textContent = skill;
        skillTag.style.animationDelay = `${index * 0.1}s`;
        skillsContainer.appendChild(skillTag);
    });
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProfileModal() {
    const modal = document.getElementById('profileModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal on escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeProfileModal();
    }
});

// Close modal on background click
document.addEventListener('click', function(e) {
    const modal = document.getElementById('profileModal');
    if (e.target === modal || e.target.classList.contains('modal-overlay')) {
        closeProfileModal();
    }
});

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    const focusableElements = document.querySelectorAll('.module-card, .team-card');
    const currentIndex = Array.from(focusableElements).findIndex(el => el === document.activeElement);
    
    if (e.key === 'Tab') {
        // Let default tab behavior work
        return;
    }
    
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        const nextIndex = (currentIndex + 1) % focusableElements.length;
        focusableElements[nextIndex].focus();
    }
    
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        const prevIndex = (currentIndex - 1 + focusableElements.length) % focusableElements.length;
        focusableElements[prevIndex].focus();
    }
});

// Add touch support for// Touch/swipe interactions - DISABLED FOR MOBILE
function initializeInteractions() {
    // Check if mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|IEMobile/i.test(navigator.userAgent) || window.innerWidth <= 768;
    
    if (isMobile) {
        console.log('Mobile detected - swipe interactions disabled');
        return; // Completely disable swipe interactions on mobile
    }
    
    let touchStartY = 0;
    let touchEndY = 0;
    const minSwipeDistance = 50;
    
    document.addEventListener('touchstart', function(e) {
        touchStartY = e.touches[0].clientY;
    });
    
    document.addEventListener('touchend', function(e) {
        touchEndY = e.changedTouches[0].clientY;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeDistance = touchStartY - touchEndY;
        
        if (Math.abs(swipeDistance) > minSwipeDistance) {
            if (swipeDistance > 0) {
                // Swipe up - scroll to next section
                const currentSection = document.elementFromPoint(window.innerWidth / 2, window.innerHeight / 2);
                const nextSection = currentSection?.closest('section')?.nextElementSibling;
                if (nextSection) {
                    nextSection.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                // Swipe down - scroll to previous section
                const currentSection = document.elementFromPoint(window.innerWidth / 2, window.innerHeight / 2);
                const prevSection = currentSection?.closest('section')?.previousElementSibling;
                if (prevSection) {
                    prevSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    }
}

// Performance optimization - DISABLED FOR MOBILE
function optimizePerformance() {
    // Check if mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|IEMobile/i.test(navigator.userAgent) || window.innerWidth <= 768;
    
    if (isMobile) {
        console.log('Mobile detected - performance optimization scroll disabled');
        return; // Completely disable performance scroll optimization on mobile
    }
    
    // Debounce scroll events
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        scrollTimeout = window.requestAnimationFrame(function() {
            // Scroll handling code here
        });
    });
    
    // Lazy load images if needed
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Add additional CSS animations dynamically
function addDynamicAnimations() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes scanLine {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
        }
        
        .module-card:nth-child(1) .status-dot::after {
            content: '';
            position: absolute;
            top: 50%;
            left: -100%;
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg, transparent, var(--neon-green), transparent);
            transform: translateY(-50%);
            animation: scanLine 3s linear infinite;
        }
    `;
    document.head.appendChild(style);
}

// Initialize all features
addTouchSupport();
optimizePerformance();
addDynamicAnimations();

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Trigger initial animations
    setTimeout(() => {
        document.querySelector('.header').style.opacity = '1';
    }, 100);
});

// Console Easter egg
console.log('%c🛡️ TRISHUL Cybersecurity Toolkit 🛡️', 'font-size: 20px; color: #00FF9C; font-weight: bold; text-shadow: 0 0 10px #00FF9C;');
console.log('%cAI-Powered Digital Protection System', 'font-size: 12px; color: #00E5FF;');
console.log('%cProtecting your digital world with advanced security solutions.', 'font-size: 10px; color: #B0B0B0;');
