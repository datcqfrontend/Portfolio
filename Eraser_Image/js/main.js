$(document).on('ready',function(){
	//alert("Ready!");
	var canvas = document.getElementById('mainObject'); //$('#mainObject');
	var context = canvas.getContext('2d');
	var imageX, imageY, imageWidth, imageHeight;
	
	function drawImage(imageObj){		
		imageX = 0;
        imageY = 0;
        imageWidth = imageObj.width;
        imageHeight = imageObj.height;

		context.drawImage(imageObj, imageX, imageY, imageWidth, imageHeight);
		//context.clearRect(imageX, imageY, imageWidth, imageHeight);
		
		checkClearStatus();		
	}
	
	function checkClearStatus(){
		var imageData = context.getImageData(imageX, imageY, imageWidth, imageHeight);
		var data = imageData.data;		
		//console.log(data);
		for (var i=0;i<data.length;i+=4){
			if(data[i+3]>0){
				console.log('Not clear');
				return;
			}			
		}
		console.log("Clear finish!");
	}
	
	var imageObj = new Image();
	imageObj.onload = function() {	
		drawImage(this);
	};
	imageObj.src = 'img/Main.jpg';
	
	$('#mainObject').bind('click',function(event){
		console.log(event);		
		
		context.save();
		context.globalCompositeOperation = 'destination-out';
	
		context.beginPath();
		context.fillStyle = "#f30";		
		context.arc(event.clientX,event.clientY,30,0,Math.PI*2,true);
		context.fill();		
		context.closePath();
		
		context.restore();
	});
});