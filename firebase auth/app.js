// Firebase configuration (replace with your own)
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore(app);
  
  // Get DOM elements
  const blogForm = document.getElementById("blogForm");
  const titleInput = document.getElementById("title");
  const contentInput = document.getElementById("content");
  const blogPostsDiv = document.getElementById("blogPosts");
  
  // Create a blog post (Create Operation)
  blogForm.addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const title = titleInput.value;
    const content = contentInput.value;
  
    if (title && content) {
      try {
        await db.collection("posts").add({
          title: title,
          content: content,
          createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        titleInput.value = "";
        contentInput.value = "";
        alert("Post created successfully");
      } catch (error) {
        console.error("Error creating post: ", error);
        alert("Error creating post");
      }
    }
  });
  
  // Get all blog posts (Read Operation)
  async function loadPosts() {
    try {
      const snapshot = await db.collection("posts").orderBy("createdAt", "desc").get();
      blogPostsDiv.innerHTML = "";
      snapshot.forEach(doc => {
        const post = doc.data();
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
          <h3>${post.title}</h3>
          <p>${post.content}</p>
          <small>${post.createdAt.toDate().toLocaleString()}</small>
          <button class="delete" onclick="deletePost('${doc.id}')">Delete</button>
        `;
        blogPostsDiv.appendChild(postElement);
      });
    } catch (error) {
      console.error("Error loading posts: ", error);
    }
  }
  
  // Delete a blog post (Delete Operation)
  async function deletePost(postId) {
    const confirmed = confirm("Are you sure you want to delete this post?");
    if (confirmed) {
      try {
        await db.collection("posts").doc(postId).delete();
        alert("Post deleted successfully");
        loadPosts(); // Reload the posts after deleting
      } catch (error) {
        console.error("Error deleting post: ", error);
        alert("Error deleting post");
      }
    }
  }
  
  // Load posts on page load
  window.onload = loadPosts;
  