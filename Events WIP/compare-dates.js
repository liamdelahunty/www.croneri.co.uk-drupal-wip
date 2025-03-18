<script>
	function compareDates(inputDate){
		var comparisonDate = new Date(inputDate);
		var currentDate = new Date();
		if (currentDate > comparisonDate) {
			document.writeln("Watch on demand");
		} else if (currentDate < comparisonDate) {
			document.writeln("Join webinar");
		}
	}
</script>