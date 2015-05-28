﻿#pragma strict



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
var OrderPopUp2:GameObject;
var OrderPopUp3:GameObject;
var OrderPopUp4:GameObject;

//Foods
static var Food1:int;
static var foodget:boolean;
//Sprites

//No animation just standby
var Idle:GameObject;

//with animation when you give the food to the customer
var Eating:GameObject;
var loss:boolean;

static var FoodGet:boolean;

//table name 
var TableName:String;
var OrderFood:int;
function Start () {


Waiter_Move = 0;

FoodGet = false;
OrderFood = Random.Range(1,4);	
Food1 = OrderFood ;
}

function Update () {
	
	
	Order();
	  if (Input.GetMouseButtonDown (0)) {
              var ray:Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
             var hit:RaycastHit;
              if (Physics.Raycast(ray, hit)) {
              		if(hit.collider.tag == "Table-Red"){
              			if(Waiter_Move3 == 3){
						iTween.MoveTo(Waiter,sides.position,2);
						Star.SetActive(false);
						Star2.SetActive(false);
						GameEnd.End_Num+=1;
						GetComponent(Tables_1).active = false;
						GameObject.Find(TableName).GetComponent(SpriteRenderer).renderer.enabled = true;
						}
              }

              }
         }
         
        
}

function OnMouseDown(){
	if(Waiter_Move == 1){
	iTween.MoveTo(Waiter,sides.position,2);
	
	FoodGet = true;
	Waiter_Move = 0;
	loss = true;
	}
	
	
	if(Waiter_Move2 == 2){
	iTween.MoveTo(Waiter,sides.position,2);
	FoodGet = false;
	Food.WaiterBool = false;
	Eating.SetActive(true);
	Idle.SetActive(false);
	
	Foods();
	}
	
	
}




function Order(){

	if(Grandma == true){
		
		yield WaitForSeconds(6);
		Waiter_Move = 1;
		
		 if(OrderFood == 1){
	OrderPopUp.SetActive(true);
	Food1 = 1;
		if(loss == true){
		OrderPopUp.SetActive(false);
		}
		
	}
	
	if(OrderFood == 2){
	OrderPopUp2.SetActive(true);
	Food1 = 2;
		if(loss == true){
		OrderPopUp2.SetActive(false);
		}
	}
	
	if(OrderFood == 3){
	OrderPopUp3.SetActive(true);
	Food1 = 3;
		if(loss == true){
		OrderPopUp3.SetActive(false);
		}
	}
	
	if(OrderFood == 4){
	OrderPopUp4.SetActive(true);
	Food1 = 4;
		if(loss == true){
		OrderPopUp4.SetActive(false);
		}
	}
		
	}
	
	
	if(Boy == true){
		
		yield WaitForSeconds(3);
		Waiter_Move = 1;
		
		 if(OrderFood == 1){
	OrderPopUp.SetActive(true);
	Food1 = 1;
		if(loss == true){
		OrderPopUp.SetActive(false);
		}
		
	}
	
	if(OrderFood == 2){
	OrderPopUp2.SetActive(true);
	Food1 = 2;
		if(loss == true){
		OrderPopUp2.SetActive(false);
		}
	}
	
	if(OrderFood == 3){
	OrderPopUp3.SetActive(true);
	Food1 = 3;
		if(loss == true){
		OrderPopUp3.SetActive(false);
		}
	}
	
	if(OrderFood == 4){
	OrderPopUp4.SetActive(true);
	Food1 = 4;
		if(loss == true){
		OrderPopUp4.SetActive(false);
		}
	}
	}
	
	

}

function Foods(){

	if(Food1 == Food.food_num){
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