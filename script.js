function volume_sphere() {
    //Write your code here
	 // Get the radius input value from the form
    let radius = parseFloat(document.getElementById('radius').value);

    // Calculate the volume of the sphere (V = 4/3 * π * r^3)
    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Display the calculated volume in the volume field
    document.getElementById('volume').value = volume.toFixed(2);
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
