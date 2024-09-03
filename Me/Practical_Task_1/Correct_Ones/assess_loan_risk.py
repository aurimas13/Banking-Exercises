def assess_loan_risk(application):
    risk_score = 0

    if 'credit_score' in application and application['credit_score'] is not None:
        if application['credit_score'] >= 700:
            risk_score -= 10
        elif application['credit_score'] < 600:
            risk_score += 20
    else:
        risk_score += 50

    if application.get('income', 0) < 30000:
        risk_score += 30
    elif application.get('income', 0) > 100000:
        risk_score -= 10

    # Handle division by zero
    if application.get('income', 0) > 0:
        dti_ratio = application['debt'] / application['income']
        if dti_ratio > 0.5:
            risk_score += 40
            print("Error: High debt-to-income ratio detected.")
    else:
        print("Error: Income cannot be zero or undefined.")

    if application.get('loan_type') == 'mortgage':
        risk_score += 15

    if risk_score > 50:
        risk_level = 'High'
    elif risk_score > 20:
        risk_level = 'Medium'
    else:
        risk_level = 'Low'

    print(f"Loan risk level assessed as: {risk_level}")
    return risk_level
