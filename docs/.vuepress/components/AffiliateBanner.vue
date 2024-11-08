<template>
  <div class="affiliate-banner">
    <a href="https://affiliate-link.com" target="_blank">
      <img src="https://cdn.pixabay.com/photo/2018/04/26/16/31/marine-3352341_640.jpg" alt="おすすめガジェット" />
    </a>
  </div>
</template>
  
  <style scoped>
.affiliate-banner {
  text-align: center;
  margin: 20px 0;
}

.affiliate-banner img {
  width: 100%;
  max-width: 300px;
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.affiliate-banner img:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}
</style>
  