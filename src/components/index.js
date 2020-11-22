//rec = {
//	top: '25px',
//	left: '96px',
//	width: '64px',
//	height: '96px'
//}

function updateStructure(rec1,rec2){
	//write your code
	recA= normalize(rec1);
	recB= normalize(rec2);

	if(contains(recA, recB)){
		const relativeDim = relative(recA, recB);
		return {...recA, childern: [relativeDim] };
	} else if(contains(recB, recA)){
		const relativeDim = relative(recB, recA);
		return {...recB, childern: [relativeDim] };
	} else{
		return {...recA};
	}

}

function contains(recA, recB){
	// const recAn=normalize(recA);
	// const recBn=normalize(recB);
	if(recA.x1<=recB.x1
	   && recA.y1<=recB.y1
	   && recA.x2>=recB.x2
	   && recA.y2>=recB.y2){
		return true;
	}
	return false;
}

function normalize(rec){
	return {
		x1: rec.top? parseInt(rec.top) : (parseInt(rec.bottom)+parseInt(rec.height)),
		y1: rec.left? parseInt(rec.left) : (parseInt(rec.right)+parseInt(rec.width)),
		x2: rec.bottom? parseInt(rec.bottom) : (parseInt(rec.top)+parseInt(rec.height)),
		y2: rec.right? parseInt(rec.right) : (parseInt(rec.left)+parseInt(rec.width))
	}
}

function relative(recA, recB){
	const res= {
		childern: recB.childern
	}
	if(recB.top){
		res.top=`${recB.x1-recA.x1}px`;
	}
	if(recB.left){
		res.left=`${recB.y1-recA.y1}px`;
	}
	if(recB.height){
		res.height= recB.height;
	}
	if(recB.width){
		res.width= recB.width;
	}
	if(recB.bottom){
		res.bottom= `${recA.x2-recB.x2}px`;
	}
	if(recB.right){
		res.right= `${recA.y2-recB.y2}px`;
	}
	return res;
}
module.exports = updateStructure;
