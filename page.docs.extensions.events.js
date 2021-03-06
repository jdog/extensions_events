PAGE.add("Docs.Extensions.events", {
	"jDog" : "version 1.0"
	, "Methods" : [
		{
			"Name" : "ext.events"
			, "Usage" : [
					[ "dog", "eventsMap" ]
					, [ "Object", "{ String Name : Array[Function] Events }" ]
				]
			, "Tags" : [ "extend", "extensions" ]
			, "Source" : [ "page.extend.events.js" ]
			, "Parent" : [ "Extensions" ]
			, "Examples" : [ 
				"// Assumes dog is already define\n PAGE.ext.events(dog, {\n  Success : []\n  , Fail : []\n  , SomeOtherEvent : []\n })\n\n// how to add a function to the event array\n dog.addEvent(\"Success\", function(id, name) {\n   console.log(id, name)\n })\n\n// how you trigger an event\n dog.$submit(function() {\n   // lots of code\n   dog.triggerEvent(\"Success\", data.id, data.name)\n })"
				, "var dog = { }\nundefined\n\nPAGE.ext.events(dog, {\n  Success : []\n  , Fail : []\n})\nundefined\n\ndog.addEvent(\"Success\", function(arg1, arg2) {\n  console.log(arg1, arg2)\n})\nObject { .... }\n\ndog.triggerEvent(\"Success\", 441235, 100002)\n441235 100002 VM3062:3\nObject { .... }"
			]
			, "Description" : "This is the way to intialize the events code for an object. First you must extend the object or (dog) in this way. Passing in the names / array of the events is optional but helpful in explaining the current events being expected. Named events are really arrays of functions that get called by triggerEvent. In this way different parts of your code can subscribe to the events of other parts without having to call the methods directly."
			, "Definitions" : {
				"dog" : "An Object, Module, or part of Module"
				, "Name" : "The name of the event"
				, "Events" : "Array of Functions to run when the named event is triggered"
			}
			, "Returns" : "PAGE"
		}
		, {
			"Name" : "addEvent"
			, "Usage" : [
					[ false, "dog.addEvent(string Name, function Func)" ]
				]
			, "Tags" : [ "extend", "extensions" ]
			, "Source" : [ "page.extend.events.js" ]
			, "Parent" : [ "Extensions" ]
			, "Examples" : [ 
				"// dog.triggerEvent(\"Success\", data.id, data.name)\n\ndog.addEvent(\"Success\", function(id, name) {\n  console.log(id, name)\n})"
			]
			, "Description" : "Adds a function to be called when the named event is triggered"
			, "Definitions" : {
				"Name" : "The name of the event"
				, "Dog" : "An Object, Module, or part of Module"
				, "Func" : "Function to run when the event is triggered"
			}
			, "Returns" : "PAGE"
		}

		, {
			"Name" : "triggerEvent"
			, "Usage" : [
					[ false, "dog.triggerEvent(string Name, argument Arg1, argument Arg2, ...)" ]
				]
			, "Tags" : [ "extend", "extensions" ]
			, "Source" : [ "page.extend.events.js" ]
			, "Parent" : [ "Extensions" ]
			, "Examples" : [ 
				"dog.triggerEvent(\"Success\", data.id, data.name)"
			]
			, "Description" : "Triggers the named event"
			, "Definitions" : {
				"Dog" : "An Object, Module, or part of Module"
				, "Name" : "The name of the event"
				, "Args" : "List of arguments that get passed to the function triggered by event"
			}
			, "Returns" : "PAGE"
		}

		, {
			"Name" : "emptyEvent"
			, "Usage" : [
					[ false, "dog.emptyEvent(Name)" ]
				]
			, "Tags" : [ "extend", "extensions" ]
			, "Source" : [ "page.extend.events.js" ]
			, "Parent" : [ "Extensions" ]
			, "Examples" : [ 
				"dog.emptyEvent(\"Success\")"
			]
			, "Description" : "Adds an event to the system"
			, "Definitions" : {
				"Name" : "The name of the event"
			}
			, "Returns" : "PAGE"
		}

	]
})
