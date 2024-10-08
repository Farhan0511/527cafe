<template>
    <div class="wrapper">
        <!-- Footer -->
        <footer class="footer bg-light py-3 shadow-sm mt-auto">
            <div class="container d-flex justify-content-between align-items-center">
                <!-- Logo dan Nama Brand -->
                <div class="content d-flex align-items-center">
                    <img src="@/assets/images.jpeg" alt="527 Caffe" class="img-fluid rounded-circle me-2"
                        style="width: 50px; height: 50px;">
                    <span class="fs-4 fw-bold">527 Caffe</span>
                </div>

            <div class="text-center mt-3 text-muted">
                <small>&copy; 2024 527 Caffe. All Rights Reserved.</small>
            </div>
            </div>

        </footer>
    </div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
/* Flexbox untuk membuat konten dan footer selalu di bagian bawah */
.wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    /* Pastikan tinggi minimal 100% dari viewport */
}

.content {
    flex-grow: 1;
    /* Konten mengambil sisa ruang */
}

/* Footer Styles */
.footer {
    background-color: #f8f9fa;
    border-top: 1px solid #e5e5e5;
}

.footer .content {
    display: flex;
    align-items: center;
}

.footer .social-links a {
    text-decoration: none;
}

.footer .social-links i {
    transition: color 0.3s ease;
}

.footer .social-links a:hover i {
    color: #0d6efd;
}
</style>