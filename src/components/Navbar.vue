<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg bg-light rounded shadow-sm p-3">
      <div class="container-fluid">
        <!-- Logo and Brand Name -->
        <a class="navbar-brand d-flex align-items-center" href="#">
          <img src="@/assets/images.jpeg" alt="" class="img-fluid rounded-circle me-2" style="width: 50px; height: 50px;">
          <span class="fs-4 fw-bold">527 Caffe</span>
        </a>

        <!-- Toggler for mobile view -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Navbar Links -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active fw-semibold text-primary" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-dark fw-semibold" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-dark fw-semibold" href="#">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-dark fw-semibold" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>


<script>
export default {
  name: "Navbar",
};
</script>
<style>
/* Navbar Styles */
.navbar {
  background-color: #f8f9fa; /* Light background for aesthetics */
}

.nav-link {
  margin-right: 20px; /* Spacing between links */
}

.navbar-brand span {
  font-family: 'Poppins', sans-serif; /* Stylish font */
}

.navbar-toggler {
  border: none; /* Remove border for cleaner look */
  outline: none; /* Remove outline on click */
}

.navbar-toggler-icon {
  filter: brightness(0.3); /* Slightly darken the toggle icon */
}

.navbar-nav .nav-link.active {
  color: #0d6efd; /* Primary color for active link */
}

.navbar-nav .nav-link:hover {
  color: #0d6efd; /* Hover color change for links */
}

/* Responsive Adjustments */
@media (max-width: 767.98px) {
  .navbar-brand {
    font-size: 1.2rem; /* Smaller font on mobile */
  }

  .navbar-brand img {
    width: 40px; /* Reduce logo size on mobile */
    height: 40px;
  }

  .navbar-nav {
    text-align: center; /* Center navbar items on mobile */
  }

  .nav-link {
    margin-right: 0; /* Remove margin between links on mobile */
    padding: 10px; /* Increase touch target size */
  }

  .navbar-collapse {
    background-color: #f8f9fa; /* Same background for collapsed menu */
    padding: 10px; /* Add padding to collapsed area */
  }
}
</style>