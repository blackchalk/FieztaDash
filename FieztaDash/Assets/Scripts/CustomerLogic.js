#pragma strict
var tablescript:GameObject;
var tablestat:boolean;

function Start () {

}

function Update () {

tablestat=tablescript.GetComponent(Table).isSitFree;


}
