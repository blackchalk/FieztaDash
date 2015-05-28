#pragma strict
var Waiter:GameObject;
var sides:Transform;
var pos = Rect(0,0,0,0);
var pos2 = Rect(0,0,0,0);
var style:GUIStyle;
var Food:String;
var Show:boolean;
var Object_Name:String;
var WaiterAnim:GameObject;
var WaiterAnim2:GameObject;
static var WaiterBool:boolean;
var Correct:GameObject;
var Wrong:GameObject;


//Global
static var food_num:int = 0;
var num_:int = 0;
function Start () {

}

function Update () {

//Debug.Log(WaiterBool);
if(WaiterBool == false){
			WaiterAnim2.renderer.enabled = true;
			WaiterAnim.renderer.enabled = false;
			Correct.SetActive(false);
	Wrong.SetActive(false);
			
		}
  if (Input.GetMouseButtonDown (0)) {
              var ray:Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
             var hit:RaycastHit;
              if(Tables.FoodGet==true||Tables2.FoodGet==true||Tables_1.FoodGet==true){
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
	if(Tables.FoodGet==true){
	if(num_==Tables.Food1){
		GUI.Box(Rect(100,100,200,200),"Correct");
		Debug.Log("Correct");
		
		Correct.SetActive(true);
		Wrong.SetActive(false);
	}
	else{
	GUI.Box(Rect(100,100,200,200),"Wrong");
	Debug.Log("Wrong");
	Correct.SetActive(false);
	Wrong.SetActive(true);
	}
	}
	
	if(Tables2.FoodGet==true){
	if(num_==Tables2.Food1){
		GUI.Box(Rect(100,100,200,200),"Correct");
		Debug.Log("Correct");
		
		Correct.SetActive(true);
		Wrong.SetActive(false);
	}
	else{
	GUI.Box(Rect(100,100,200,200),"Wrong");
	Debug.Log("Wrong");
	Correct.SetActive(false);
	Wrong.SetActive(true);
	}
	}
	
	if(Tables_1.FoodGet==true){
	if(num_==Tables_1.Food1){
		GUI.Box(Rect(100,100,200,200),"Correct");
		Debug.Log("Correct");
		
		Correct.SetActive(true);
		Wrong.SetActive(false);
	}
	else{
	GUI.Box(Rect(100,100,200,200),"Wrong");
	Debug.Log("Wrong");
	Correct.SetActive(false);
	Wrong.SetActive(true);
	}
	}

	WaiterBool = true;
		if(WaiterBool == true){
			
			WaiterAnim.renderer.enabled = true;
			WaiterAnim2.renderer.enabled = false;
		
		}
		
		   if(Tables.FoodGet==true){
		Show = false;
		food_num = num_;
		Tables.Waiter_Move2 = 2;
		
		
		//Debug.Log(food_num);
	
	}
	 if(Tables_1.FoodGet==true){
		Show = false;
		food_num = num_;
		Tables_1.Waiter_Move2 = 2;
		
		//Debug.Log(food_num);
	
	}
	
	if(Tables2.FoodGet==true){
		Show = false;
		food_num = num_;
	Tables2.Waiter_Move2 = 2;
	}
	
	if(Tables2_1.FoodGet==true){
		Show = false;
		food_num = num_;
	Tables2_1.Waiter_Move2 = 2;
	}
	
	
	}
	
	if(Show == false){
	
	
	}
	

}


