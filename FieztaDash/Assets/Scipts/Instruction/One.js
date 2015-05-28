#pragma strict

//gameObject
var One_:GameObject;
var Two_:GameObject;
var Three_:GameObject;
var Four_:GameObject;
var Five_:GameObject;
var Pos_:Transform;
var String_:String;
var Star:GameObject;
 var Star2:GameObject;
 //Waiter
 //First Move of the waiter
static var Waiter_Move:int=0;
 //Second Move of the waiter
static var Waiter_Move2:int=0;
 //Third Move of the waiter
var Waiter_Move3:int=0;

//Waiter
var Waiter:GameObject;
//Waiter position in the table
var sides:Transform;

//Customer
//if grandma or grandad
var Grandma:boolean;
//if boy or girl
var Boy:boolean;
//Button of pop up
var OrderPopUp:GameObject;

//Foods
var Food1:int = 0;
static var foodget:boolean;
//Sprites

//No animation just standby
var Idle:GameObject;

//with animation when you give the food to the customer
var Eating:GameObject;


static var FoodGet:boolean;

//table name 
var TableName:String;
function Start () {
Order();

Waiter_Move = 0;

FoodGet = false;
	
}

function Update () {
	
	
	
	  if (Input.GetMouseButtonDown (0)) {
              var ray:Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
             var hit:RaycastHit;
              if (Physics.Raycast(ray, hit)) {
              		if(hit.collider.tag == "Table-Red"){
              			if(Waiter_Move3 == 3){
						iTween.MoveTo(Waiter,sides.position,2);
						Star.SetActive(false);
						Star2.SetActive(false);
						
						GetComponent(One).active = false;
						GameObject.Find(TableName).GetComponent(SpriteRenderer).renderer.enabled = true;
						Four_.SetActive(false);
						Five_.SetActive(true);
						
						}
              }

              }
         }
}

function OnMouseDown(){
	if(Waiter_Move == 1){
	iTween.MoveTo(Waiter,sides.position,2);
	OrderPopUp.SetActive(false);
	FoodGet = true;
	Waiter_Move = 0;
	Two_.SetActive(false);
		Three_.SetActive(true);
	}
	
	
	if(Waiter_Move2 == 2){
	iTween.MoveTo(Waiter,sides.position,2);
	FoodGet = false;
	Eating.SetActive(true);
	Idle.SetActive(false);
	Foods();
	Three_.SetActive(false);
		Four_.SetActive(true);
	}
	
	
}




function Order(){

	if(Grandma == true){
		One_.SetActive(false);
		Two_.SetActive(true);
		yield WaitForSeconds(6);
		Waiter_Move = 1;
		OrderPopUp.SetActive(true);
		
		
	}
	
	
	if(Boy == true){
		One_.SetActive(false);
		Two_.SetActive(true);
		yield WaitForSeconds(3);
		Waiter_Move = 1;
		OrderPopUp.SetActive(true);
		
	}
	
	

}

function Foods(){

	if(Food1 == FoodInstruction.food_num){
		Debug.Log("Correct");
		yield WaitForSeconds(4);
		Waiter_Move2 = 0;
		Waiter_Move3 = 3;
		Star.SetActive(true);
		GameObject.Find(TableName).GetComponent(SpriteRenderer).renderer.enabled = true;
		GameObject.Find(String_).SetActive(false);

	}
	
	else{
	Debug.Log("Wrong");
	yield WaitForSeconds(4);
	Waiter_Move3 = 3;
	Waiter_Move2 = 0;
		Star2.SetActive(true);
		GameObject.Find(TableName).GetComponent(SpriteRenderer).renderer.enabled = true;
		GameObject.Find(String_).SetActive(false);
		
	}
					

}