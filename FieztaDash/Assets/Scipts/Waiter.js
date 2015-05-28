#pragma strict
var Waiter:GameObject;
var sides:Transform;


function Start(){
	


}

function OnMouseDown(){
	
	iTween.MoveTo(Waiter,sides.position,2);
	GetComponent(Order).enabled = false;
}

