// Show detail destination
function showDetail(title, description) {
    const detailContent = document.getElementById('detailContent');
    detailContent.innerHTML = `
        <div class="animate__animated animate__fadeIn">
            <h3 class="text-primary mb-4"><i class="fas fa-map-marker-alt me-2"></i>${title}</h3>
            <p class="lead">${description}</p>
            <div class="mt-4">
                <a href="#kontak" class="btn btn-detail">
                    <i class="fas fa-comment-dots me-2"></i>Tulis Ulasan
                </a>
            </div>
        </div>
    `;

    // Smooth scroll to detail section
    document.getElementById('detail').scrollIntoView({ behavior: 'smooth' });
}

// Show gallery modal
function showGalleryModal(imageSrc, title) {
    document.getElementById('galleryModalImage').src = imageSrc;
    document.getElementById('galleryModalTitle').textContent = title;
    // Menggunakan kelas Bootstrap 5 'Modal' untuk mengontrol modal
    const modal = new bootstrap.Modal(document.getElementById('galleryModal'));
    modal.show();
}

// Handle form submission
function handleSubmit(event) {
    event.preventDefault();

    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const pesan = document.getElementById('pesan').value;
    const rating = document.querySelector('input[name="rating"]:checked');

    // Validate rating
    if (!rating) {
        alert('Mohon berikan rating untuk ulasan Anda!');
        return;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Mohon masukkan alamat email yang valid!');
        return;
    }

    // Validate rating range
    const ratingValue = parseInt(rating.value);
    if (ratingValue < 1 || ratingValue > 5) {
        alert('Rating harus antara 1-5!');
        return;
    }

    // Show thank you message
    document.getElementById('contactForm').style.display = 'none';
    document.getElementById('thankYouMessage').style.display = 'block';

    // Reset form after 3 seconds and hide thank you message
    setTimeout(() => {
        document.getElementById('contactForm').reset();
        document.getElementById('contactForm').style.display = 'block';
        document.getElementById('thankYouMessage').style.display = 'none';
    }, 3000);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    // Tambah shadow yang lebih jelas saat discroll ke bawah
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.2)';
    } else {
        // Kembali ke shadow awal saat di bagian atas
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});