#pragma strict
var Object1:GameObject;
var Object2:GameObject;
function Start () {
Object1.SetActive(true);
}

function Update () {

}



function OnTriggerEnter(col : Collider) {
		
		if(col.gameObject.tag=="Draggable"){
		
		Object1.SetActive(false);
		Object2.SetActive(true);
		Destroy(col.gameObject);
		
		}
	}