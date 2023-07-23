import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  done: Boolean = false;
  myString: string = '';

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  test() {
    console.log('request made');
    // HTTP request code here
    const url = 'https://checkout-test.adyen.com/v70/payments'; // Replace with the API endpoint URL
    const body = {
      merchantAccount: "IllinoisInstOfTechnologyECOM",
      reference: "My first Adyen test payment",
      amount: {
      value: 1000,
      currency: "EUR"
      },
      type: "scheme",
      paymentMethod: {
      encryptedCardNumber: "test_4111111111111111",
      encryptedExpiryMonth: "test_03",
      encryptedExpiryYear: "test_2030",
      encryptedSecurityCode: "test_737"
      }
    };// Replace with the request payload

    // Set the API key in the headers
    const apiKey = 'AQEzhmfuXNWTK0Qc+iSZnmgxqeuSW6JDHodlXlFTxXClkWpEmd4IF5YSihP5/vv0h0r8WhkbEMFdWw2+5HzctViMSCJMYAc=-W3MPbetqmi9OzJOuziqY5/ANHSp9ylBcapCNHyI5Mbg=-4K$2^?{:NUF:wq*3'; // Replace with your actual API key
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    });

    this.http.post(url, body, { headers }).subscribe(
      (response) => {
        console.log('Response:', response);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
    this.done = true;
    this.myString = 'Api test integration done!';
  }
}
