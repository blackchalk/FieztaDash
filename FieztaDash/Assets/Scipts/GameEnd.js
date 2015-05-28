#pragma strict
var TotalScore:int;
function Start () {
End_Num = 0;
}

var congrats:GameObject;
static var End_Num:int= 0;
function Update () {
	
	Ends();
	
}
var Level:String;
function Ends(){

	
	if(End_Num==TotalScore){
	
		congrats.SetActive(true);
		timer.timer = 1;
	}

}
