var g_ingame;

$(document).ready(function()
{
	var hash = location.hash;
	location.hash = '';
	location.hash = hash;
	jengineStart();
} );

function startGame()
{
	g_ingame	= new SceneIngame();
	SceneManager.Add( g_ingame );
}
