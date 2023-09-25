<script>
	let id;

	import { getStudentDetails } from '../grpcRequests/Student';
</script>

<div>
	<form
		on:submit={(e) => {
			e?.preventDefault();
			getStudentDetails(id);
			console.log(id, typeof id);
		}}
	>
		<input
			on:change={(e) => {
				id = e?.target?.value;
				id = parseInt(id);
			}}
			type="number"
			value={id}
		/>
		<button type="submit">Get Student Details</button>
	</form>
</div>
