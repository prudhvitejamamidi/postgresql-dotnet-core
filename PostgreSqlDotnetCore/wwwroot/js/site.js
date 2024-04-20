// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
@section Scripts {
    <script>
        $(document).ready(function () {
            $(".delete-expense").click(function () {
                var expenseId = $(this).data("expense-id");
                deleteExpense(expenseId);
            });
        });

        function deleteExpense(id) {
            if (confirm("Are you sure you want to delete this expense?")) {
            $.ajax({
                url: "@Url.Action("DeleteExpense", "Expense")",
                type: "POST",
                data: { id: id },
                success: function () {
                    // Remove the deleted row from the table
                    $(".delete-expense[data-expense-id='" + id + "']").closest("tr").remove();
                },
                error: function () {
                    alert("An error occurred while deleting the expense.");
                }
            });
            }
        }
    </script>
}