
function aTest(){
	var testForm = document.forms["test"];
	
	// calc income
	var income = testForm["income"].value;
	income = Number(income);
	var taxes = income * .28;
	testForm["taxes"].value = taxes.toFixed(2);
	netIncome = income - taxes;
	netIncome = String(netIncome.toFixed(0));
	testForm["netIncome"].value = "$" + netIncome;
	
	// calculating total expenses
	var housing = testForm["housing"].value;
	housing = Number(housing);
	
	var utilities = testForm["utilities"].value;
	utilities = Number(utilities);
	
	var studentLoans = testForm["studentLoans"].value;
	studentLoans = Number(studentLoans);

	var totalMonthlyExpenses = housing + utilities + studentLoans; 
	totalMonthlyExpenses = String(totalMonthlyExpenses.toFixed(0));
	testForm["totalMonthlyExpenses"].value = "$" + totalMonthlyExpenses;

}

