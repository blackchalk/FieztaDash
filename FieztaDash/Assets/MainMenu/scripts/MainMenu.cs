/// <summary>
/// Main menu.
/// Attached to Main Camera
/// </summary>
using UnityEngine;
using System.Collections;

public class MainMenu : MonoBehaviour{
	
	public Texture backgroundTexture;

	public GUIStyle Random1;
	public GUIStyle Random2;
	public GUIStyle Random3;
	public GUIStyle Random4;
	public GUIStyle Random5;

	public float guiPlacementY1;
	public float guiPlacementY2;
	public float guiPlacementY3;
	public float guiPlacementY4;
	public float guiPlacementY5;

	public float guiPlacementX1;
	public float guiPlacementX2;
	public float guiPlacementX3;
	public float guiPlacementX4;
	public float guiPlacementX5;


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
		if (GUI.Button (new Rect(Screen.width * guiPlacementX1, Screen.height * guiPlacementY1, Screen.width * .11f, Screen.height * .11f), "",Random1)){
			Application.LoadLevel(2);
		}
		if (GUI.Button (new Rect(Screen.width * guiPlacementX2, Screen.height * guiPlacementY2, Screen.width * .07f, Screen.height * .07f), "",Random2)){
			audio.Play();
		}
		if (GUI.Button (new Rect(Screen.width * guiPlacementX3, Screen.height * guiPlacementY3, Screen.width * .11f, Screen.height * .11f), "",Random3)){
			Application.LoadLevel(3);	
		}
		if (GUI.Button (new Rect(Screen.width * guiPlacementX4, Screen.height * guiPlacementY4, Screen.width * .11f, Screen.height * .11f), "",Random4)){
					Application.Quit();
			}
		if (GUI.Button (new Rect(Screen.width * guiPlacementX5, Screen.height * guiPlacementY5, Screen.width * .07f, Screen.height * .07f), "",Random5)){
			audio.Stop();
		}
		
	}
	}
