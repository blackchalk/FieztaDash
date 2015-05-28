/// <summary>
/// Main menu.
/// Attached to Main Camera
/// </summary>
using UnityEngine;
using System.Collections;

public class stage : MonoBehaviour{
	
	public Texture backgroundTexture;
	
	public GUIStyle Random1;
	public GUIStyle Random2;
	public GUIStyle Random3;
	public GUIStyle Random4;
	public GUIStyle Random5;
	public GUIStyle Random6;
	public GUIStyle Random7;
	public GUIStyle Random8;

	public float guiPlacementY1;
	public float guiPlacementY2;
	public float guiPlacementY3;
	public float guiPlacementY4;
	public float guiPlacementY5;
	public float guiPlacementY6;
	public float guiPlacementY7;
	public float guiPlacementY8;
	
	public float guiPlacementX1;
	public float guiPlacementX2;
	public float guiPlacementX3;
	public float guiPlacementX4;
	public float guiPlacementX5;
	public float guiPlacementX6;
	public float guiPlacementX7;
	public float guiPlacementX8;

	void OnGUI(){
		
		//Display our Background Texture
		GUI.DrawTexture(new Rect(0,0,Screen.width,Screen.height),backgroundTexture);
		
		/*
// button with gui outline
if (GUI.Button (new Rect(Screen.width * .25f, Screen.height * .5f, Screen.width * .5f, Screen.height * .1f), "Play Game")){
}
if (GUI.Button (new Rect(Screen.width * .25f, Screen.height * .5f, Screen.width * .5f, Screen.height * .1f), "About")){
}
*/
		
		// button without gui outline
		if (GUI.Button (new Rect(Screen.width * guiPlacementX1, Screen.height * guiPlacementY1, Screen.width * .15f, Screen.height * .15f), "",Random1)){

		}
		if (GUI.Button (new Rect(Screen.width * guiPlacementX2, Screen.height * guiPlacementY2, Screen.width * .15f, Screen.height * .15f), "",Random2)){
			
		}
		if (GUI.Button (new Rect(Screen.width * guiPlacementX3, Screen.height * guiPlacementY3, Screen.width * .15f, Screen.height * .15f), "",Random3)){
			
		}
		if (GUI.Button (new Rect(Screen.width * guiPlacementX4, Screen.height * guiPlacementY4, Screen.width * .15f, Screen.height * .15f), "",Random4)){

		}

		if (GUI.Button (new Rect(Screen.width * guiPlacementX5, Screen.height * guiPlacementY5, Screen.width * .15f, Screen.height * .18f), "",Random5)){
			
		}
		if (GUI.Button (new Rect(Screen.width * guiPlacementX6, Screen.height * guiPlacementY6, Screen.width * .15f, Screen.height * .15f), "",Random6)){
			
		}
		if (GUI.Button (new Rect(Screen.width * guiPlacementX7, Screen.height * guiPlacementY7, Screen.width * .15f, Screen.height * .18f), "",Random7)){
			
		}
		if (GUI.Button (new Rect(Screen.width * guiPlacementX8, Screen.height * guiPlacementY8, Screen.width * .1f, Screen.height * .1f), "",Random8)){
			Application.LoadLevel(1);	
		}
	}
}
