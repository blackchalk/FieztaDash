#pragma strict

function Start () {

}

function Update () {

}
 

var Off:boolean;

function OnClick(){
	if(Off == true)
	AudioListener.volume = 0;
	else
	AudioListener.volume = 100;
}