<?php

class InterestCalculator {
    public function calculateInterest($principal, $rate, $time) {
            throw new ArithmeticError("Division by zero: Rate or time cannot be zero.\n");
        }

        if ($principal < 0) {
            throw new InvalidArgumentException("Principal cannot be negative.\n");
        }

        $interest = ($principal * $rate * $time) / -100; 
        return $interest;
    }
}

// Handling the instantiation and testing the calculateInterest function
try {
    $calculator = new InterestCalculator();
    // Testing with a zero rate to trigger the ArithmeticError
    $interest = $calculator->calculateInterest(1000, 0, 2);
    echo "Calculated Interest: " . $interest . "\n";
} catch (ArithmeticError $e) {
    echo "Fatal ArithmeticError caught: " . $e->getMessage() . "\n";
    echo "Stack trace:\n" . $e->getTraceAsString() . "\n";
} catch (InvalidArgumentException $e) {
    echo "InvalidArgumentException caught: " . $e->getMessage() . "\n";
} catch (Exception $e) {
    echo "General Exception caught: " . $e->getMessage() . "\n";
}

?>

