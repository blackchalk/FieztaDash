 #pragma strict

//String
var names:String;
var names2:String;

//Objects
//var Prefab_:GameObject;
//var Pos_:Transform;
var Box:GameObject;
var Table:GameObject;
var Table2:GameObject;
//Boolean
var BoxBoll:boolean;

//checks if sit available
var isSitFree:boolean;

function Start () {
isSitFree=true;
Box.renderer.enabled = false;
Destroy(GameObject.Find("Sound"));
}

function Update () {

}

function OnTriggerEnter(col:Collider){


	if(col.gameObject.name == names&&isSitFree==true){
			
			
			
			//var Tables = Instantiate(Prefab_,Pos_.position, Pos_.rotation);
			//Tables.name = Tables.name.Replace("(Clone)","").Trim();
			Table.SetActive(true);
			col.gameObject.SetActive(false);
			GetComponent(SpriteRenderer).renderer.enabled = false;
			isSitFree=false;
	}

	if(col.gameObject.name == names2&&isSitFree==true){
			
			
			
			//var Tables = Instantiate(Prefab_,Pos_.position, Pos_.rotation);
			//Tables.name = Tables.name.Replace("(Clone)","").Trim();
			Table2.SetActive(true);
			col.gameObject.SetActive(false);
			GetComponent(SpriteRenderer).renderer.enabled = false;
			isSitFree=false;
	}
	else{
	return;
	}
	
	
	
}



function OnTriggerExit(){
	BoxBoll = false;

}
function box(){
	
	if(BoxBoll == true){
	Box.renderer.enabled = true;
	yield WaitForSeconds(2);
	Box.renderer.enabled = false;	
	}	

}
