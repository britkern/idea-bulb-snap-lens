// -----JS CODE-----
script.getSceneObject().getChild(0).enabled = false;
var killTime;

var raisedEvent = script.createEvent("BrowsRaisedEvent");
raisedEvent.bind(function(eventData)
{
	var bulb = script.getSceneObject().getChild(0);
	bulb.enabled = true;
});

var loweredEvent = script.createEvent("BrowsLoweredEvent");
loweredEvent.bind(function(eventData)
{
	killTime = new Date().getSeconds() + 2;
	//var bulb = script.getSceneObject().getChild(0);
	//bulb.enabled = false;
});

var updateEvent = script.createEvent("UpdateEvent");
updateEvent.bind(function(eventData)
{
	if(killTime)
	{
		if(killTime <= new Date().getSeconds())
		{
			killTime = null;
			var bulb = script.getSceneObject().getChild(0);
			bulb.enabled = false;
		}
	}
});