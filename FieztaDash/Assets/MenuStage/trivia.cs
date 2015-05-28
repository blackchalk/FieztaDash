/// <summary>
/// Main menu.
/// Attached to Main Camera
/// </summary>
using UnityEngine;
using System.Collections;

public class trivia : MonoBehaviour{
	
	public Texture backgroundTexture;
	
	public GUIStyle Random1;
	public GUIStyle Random2;

	[SerializeField]
	public string Level ;


	
	public float guiPlacementY1;
	public float guiPlacementY2;
	
	
	public float guiPlacementX1;
	public float guiPlacementX2;
	
	
	void OnGUI(){
		
		//Display our Background Texture
		GUI.DrawTexture(new Rect(0,0,Screen.width,Screen.height),backgroundTexture);
		
		
		
		// button without gui outline
		if (GUI.Button (new Rect(Screen.width * guiPlacementX1, Screen.height * guiPlacementY1, Screen.width * .09f, Screen.height * .09f), "",Random1)){
			Application.LoadLevel("Menu");	
		}
		if (GUI.Button (new Rect(Screen.width * guiPlacementX2, Screen.height * guiPlacementY2, Screen.width * .09f, Screen.height * .09f), "",Random2)){
			Application.LoadLevel(Level);	
		}
		
	}
}
