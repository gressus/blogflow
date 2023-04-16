<footer class="footer">
  <div class="footer-content">
    <p>&copy; {new Date().getFullYear()} [Your Name]. All rights reserved.</p>
    <div class="social-links">
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
        <!-- <GitHubIcon /> -->
      </a>
      <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
        <!-- <TwitterIcon /> -->
      </a>
      <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
        <!-- <LinkedInIcon /> -->
      </a>
    </div>
  </div>
</footer>

<style>
  .footer {
    background-color: #f5f5f7;
    padding: 1rem;
  }

  .footer-content {
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  p {
    margin: 0;
  }

  .social-links {
    display: flex;
    gap: 1rem;
  }

  .social-links a {
    color: inherit;
    text-decoration: none;
  }

  :global(html[data-theme='dark'] .footer) {
    background-color: #333 !important;
    color: #ccc;
  }

  :global(html[data-theme='dark'] .social-links a) {
    color: #ccc;
  }
</style>