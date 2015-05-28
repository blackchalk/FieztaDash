#pragma strict
var Waiter:GameObject;
var sides:Transform;
var pos = Rect(0,0,0,0);
var pos2 = Rect(0,0,0,0);
var style:GUIStyle;
var Food:String;
var Show:boolean;
var Object_Name:String;
//Global
static var food_num:int = 0;
var num_:int = 0;
function Start () {

}

function Update () {
  if (Input.GetMouseButtonDown (0)) {
              var ray:Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
             var hit:RaycastHit;
              if(One.FoodGet==true){
              if (Physics.Raycast(ray, hit)) {
              		if(hit.collider.name == Object_Name){
              		Show = true;
					iTween.MoveTo(Waiter,sides.position,2);
                 /*Debug.Log ("Name = " + hit.collider.name);
                 Debug.Log ("Tag = " + hit.collider.tag);
                 Debug.Log ("Hit Point = " + hit.point);
                 Debug.Log ("Object position = " + hit.collider.gameObject.transform.position);
                 Debug.Log ("--------------");*/
              }
              else{
              Show = false;
              }
              }
         }
         }
}


function OnGUI(){
	var horizRatio = Screen.width / 800.0;
	var vertRatio = Screen.height / 400.0;
	GUI.matrix = Matrix4x4.TRS (Vector3(0, 0, 0), Quaternion.identity, Vector3 (horizRatio, vertRatio, 1));
	
	if(Show ==true){
	GUI.Box(pos,Food);
	
	if(GUI.Button(pos2,"Get",style)){
		   if(One.FoodGet==true){
		Show = false;
		food_num = num_;
		One.Waiter_Move2 = 2;
		
		Debug.Log(food_num);
	
	}
	 
	}
	}
	

}


