
  const productName = "patter pack"; // Replace with dynamic product info
  const phone = "21626073858"; // Your WhatsApp number in international format
  const message = `nheb n3adi command ${encodeURIComponent(productName)}`;
  
  const whatsappLink = `https://wa.me/${phone}?text=${message}`;
  document.getElementById("whatsapp-link").href = whatsappLink;
