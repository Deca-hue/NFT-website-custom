// Sample NFT Data
const nfts = [
    {
        title: "Bitcoin Art ",
        image: "bitcoin.avif",
        price: "2 ETH"
    },
    {
        title: "Ethereum Art ",
        image: "ether.jpg",
        price: "1.5 ETH"
    },
    {
        title: "Litecoin Art ",
        image: "litecoin.jpg",
        price: "3 ETH"
    },
    {
        title: "Ripple Art",
        image: "ripple.jpeg",
        price: "4.5 ETH"
    }
];

// Elements
const loader = document.getElementById("loader");
const connectWalletBtn = document.getElementById("connectWalletBtn");

// Function to generate NFT Cards dynamically
function displayNFTs() {
    const nftContainer = document.querySelector(".nft-cards");
    nfts.forEach(nft => {
        const nftCard = document.createElement("div");
        nftCard.classList.add("nft-card");

        nftCard.innerHTML = `
            <img src="${nft.image}" alt="${nft.title}">
            <h3>${nft.title}</h3>
            <p>Price: ${nft.price}</p>
            <button onclick="buyNFT('${nft.title}')">Buy Now</button>
        `;

        nftContainer.appendChild(nftCard);
    });
}

// Simulate NFT Purchase Action (showing a confirmation popup)
function buyNFT(title) {
    // For example: Displaying a modal or a confirmation alert
    const confirmation = confirm(`Are you sure you want to purchase ${title} for ${nfts.find(nft => nft.title === title).price}?`);
    
    if (confirmation) {
        alert(`Congratulations! You have successfully purchased ${title}.`);
    } else {
        alert('Purchase canceled.');
    }
}

// Simulate Wallet Connection (no MetaMask involved)
function connectWallet() {
    // Simulate a successful connection and update the UI
    console.log("Wallet connected!");

    // Hide the loader screen
    loader.style.display = 'none';

    // Update the button text to indicate wallet connection
    connectWalletBtn.innerText = 'Wallet Connected';
    connectWalletBtn.disabled = true; // Disable button after connecting
}

// Event Listener for Connect Wallet Button
connectWalletBtn.addEventListener('click', connectWallet);

// Initialize the NFTs and Wallet on page load
window.onload = function() {
    displayNFTs(); // Display NFT cards
    setTimeout(() => {
        loader.style.display = 'none';  // Hide loader after 3 seconds
    }, 3000);  // Adjust time as needed
};

// Expandable FAQ functionality
document.querySelectorAll('.faq-title').forEach((button) => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});

// Price Estimator
const exchangeRates = {
    ETH: 1800, // Example USD value per ETH
    BTC: 25000, // Example USD value per BTC
    LTC: 90 // Example USD value per LTC
};

document.getElementById('estimateBtn').addEventListener('click', () => {
    const cryptoAmount = parseFloat(document.getElementById('cryptoAmount').value);
    const cryptoType = document.getElementById('cryptoType').value;

    if (!cryptoAmount || cryptoAmount <= 0) {
        alert('Please enter a valid cryptocurrency amount.');
        return;
    }

    const usdValue = (cryptoAmount * exchangeRates[cryptoType]).toFixed(2);
    document.getElementById('priceResult').textContent = `Estimated Price: $${usdValue} USD`;
});

// Expandable Blog functionality
document.querySelectorAll('.blog-title').forEach((button) => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const testimonials = [
      {
        quote: "This NFT project is a game-changer! The art and utility are next level.",
        name: "Alex Johnson",
        role: "Top Collector",
        img: "https://via.placeholder.com/60",
      },
      {
        quote: "I've been part of many NFT projects, but this one stands out for its transparency.",
        name: "Emily Carter",
        role: "Early Adopter",
        img: "https://via.placeholder.com/60",
      },
      {
        quote: "I made my first NFT purchase here, and the experience was smooth and secure!",
        name: "David Smith",
        role: "Verified Buyer",
        img: "https://via.placeholder.com/60",
      },
      {
        quote: "The NFT staking rewards are amazing. This project is worth the hype!",
        name: "Sophia Lee",
        role: "Crypto Investor",
        img: "https://via.placeholder.com/60",
      },
      {
        quote: "The NFT marketplace is super easy to use. Highly recommend!",
        name: "James Parker",
        role: "NFT Enthusiast",
        img: "https://via.placeholder.com/60",
      },
    ];
  
    const container = document.getElementById("testimonial-container");
  
    function createTestimonial(testimonial) {
      const div = document.createElement("div");
      div.classList.add("testimonial");
      div.innerHTML = `
        <p class="quote">"${testimonial.quote}"</p>
        <div class="user">
          <img src="${testimonial.img}" alt="${testimonial.name}">
          <h4>${testimonial.name}</h4>
          <span>${testimonial.role}</span>
        </div>
      `;
      return div;
    }
  
    // Duplicate testimonials to create an infinite scroll effect
    testimonials.forEach((testimonial) => {
      container.appendChild(createTestimonial(testimonial));
    });
  
    testimonials.forEach((testimonial) => {
      container.appendChild(createTestimonial(testimonial));
    });
  });
  