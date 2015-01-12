PAGE.addWait(
	"Modules.localAPI"

	, [
		"Modules.remoteAPI" // local inherits from this
	]

	, function(ref) {

		var dog = ref.remoteAPI

		PAGE.loadScript("page.docs.extensions.events.js", true)

		dog.buildAllSections([
			"Docs.Extensions.events"
		])

		return dog

	})
