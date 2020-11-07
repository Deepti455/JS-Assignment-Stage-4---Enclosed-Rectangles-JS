//rec = {
//	top: '25px',
//	left: '96px',
//	width: '64px',
//	height: '96px'
//}

function updateStructure(rec1,rec2){
	//write your code
	if(rec1[top]<rec2[top] && rect1[height]<rec2[height] && rect1[left]<rec2[left] && rec1[width]<rec2[width]){
		rec2[top]=rect1[top]-rec2[top];
		rec2[left]=rect1[left]-rec2[left];
		rec2[width]=rect1[width]-rec2[width];
		rec2[height]=rect1[height]-rec2[height];
		return rec2;
	}else if(rec2[top]<rec1[top] && rec2[height]<rec1[height] && rec2[left]<rec1[left] && rec2[width]<rec1[width]){
		rec1[top]=rec2[top]-rect1[top];
		rec1[left]=rec2[left]-rect1[left];
		rec1[width]=rec2[width]-rect1[width];
		rec1[height]=rec2[height]-rect1[height];
		return rec1;
	}else if(rec1[top]==rec2[top] && rect1[height]==rec2[height] && rect1[left]==rec2[left] && rec1[width]==rec2[width]){
		rec1[top]=rec2[top]-rect1[top];
		rec1[left]=rec2[left]-rect1[left];
		rec1[width]=rec2[width]-rect1[width];
		rec1[height]=rec2[height]-rect1[height];
		return rect1;
	}else{
		return "none";
	}

}

module.exports = updateStructure;
