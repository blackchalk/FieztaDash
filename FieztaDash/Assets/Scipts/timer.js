#pragma strict
static var timer:float;
var Timer:float;
var pos = Rect(200,10,0,0);
var style :GUIStyle;

var GameOver:GameObject;
function Start () {
timer = Timer;
Destroy(GameObject.Find("Sound"));
}

function Update () {
timer-=Time.deltaTime;
TIME();



}


function TIME(){

	if(timer <= 0){
	timer = 0 ; 
	
	
	GameOver.SetActive(true);
	

}

}
function OnGUI(){


var minute:float = Mathf.Floor(timer/60);
var seconds:float = Mathf.RoundToInt(timer%60);

var Width = Screen.width/900.0;
var Height = Screen.height/400.0;

GUI.matrix = Matrix4x4.TRS(Vector3(0,0,0),Quaternion.identity,Vector3(Width,Height,1));

GUI.Label(pos,"Time:"+minute+":"+seconds,style);


}