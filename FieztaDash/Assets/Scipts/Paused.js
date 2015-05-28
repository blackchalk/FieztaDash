var rect = Rect (0, 0, 150, 150);
var label : String;
var label2 : String;
var label3 : String;
var label4 : String;
var styleGUI : GUIStyle;
var resumeGUI : GUIStyle;
var restartGUI : GUIStyle;
var mainMenuGUI : GUIStyle;
var BackGroundGUI : Texture2D;
var rect2 = Rect (0, 0, 150, 150);
var rect3 = Rect (0, 0, 150, 150);
var rect4 = Rect (0, 0, 150, 150);
var rect5 = Rect (0, 0, 150, 150);
var showGUI:boolean = false;
function Start () {

}

function Update(){


}

function OnGUI () {

		var horizRatio = Screen.width / 900.0;
		var vertRatio = Screen.height / 600.0;
 
		GUI.matrix = Matrix4x4.TRS (Vector3(0, 0, 0), Quaternion.identity, Vector3 (horizRatio, vertRatio, 1));
		
if(GUI.Button(rect,label3,styleGUI)){
	showGUI = true;
	Time.timeScale = 0;

}


if(showGUI){
GUI.DrawTexture(rect5,BackGroundGUI);
if(GUI.Button(rect2,label,resumeGUI)){

	Time.timeScale = 1;
	showGUI = false;

}

if(GUI.Button(rect3,label2,mainMenuGUI)){
Time.timeScale = 1;
Application.LoadLevel("Menu");	

}
if(GUI.Button(rect4,label4,restartGUI)){
Time.timeScale = 1;
Application.LoadLevel(Application.loadedLevel);	

}


}

}