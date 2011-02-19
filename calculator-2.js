
function aTest(){
	var calcForm = document.forms["calculator"];
	
	// calc income
	// fist go at validating fields.
	// checking to see that something entered into income field
	// this works for this field but is a terrible implementation. 
	// need to give inline error messages
	if (calcForm.income.value == "" || calcForm.income.value == null)
		{
			document.write("Please enter income");
		}
	else
		{
			var income = calcForm["income"].value;
			income = Number(income);
		}

	var taxes = income * .28;
	calcForm["taxes"].value = taxes.toFixed(2);
	netIncome = income - taxes;
	netIncome = String(netIncome.toFixed(0));
	calcForm["netIncome"].value = "$" + netIncome;
	
	// calculating total expenses
	var housing = calcForm["housing"].value;
	housing = Number(housing);
	
	var utilities = calcForm["utilities"].value;
	utilities = Number(utilities);
	
	var studentLoans = calcForm["studentLoans"].value;
	studentLoans = Number(studentLoans);

	var totalMonthlyExpenses = housing + utilities + studentLoans; 
	totalMonthlyExpenses = String(totalMonthlyExpenses.toFixed(0));
	calcForm["totalMonthlyExpenses"].value = "$" + totalMonthlyExpenses;

}

