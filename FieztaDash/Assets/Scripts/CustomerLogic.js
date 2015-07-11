#pragma strict
var tablescript:GameObject;
var tablestat:boolean;
var imCamera:GameObject;
var objdrag:boolean;
function Start () {
imCamera=GameObject.Find("Camera");
objdrag=imCamera.GetComponent(drag).dragging;
Debug.Log(objdrag);
}

function Update () {

tablestat=tablescript.GetComponent(Table).isSitFree;
Debug.Log("is table free?"+tablestat);

}
