import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
	today
	year
	month
	day
	emptyDates
	monthDays
	firstDay
	months

  constructor() { 
  	this.months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  }

  ngOnInit() { 
  	this.today = new Date()
  	this.day = this.today.getDay()
  	this.year = this.today.getFullYear()
  	this.month = this.today.getMonth()
  	this.refreshCalendar()
  }

  prevYear() {
  	this.year = this.year-1
  	this.refreshCalendar()
  }

  nextYear() {
  	this.year = this.year + 1
  	this.refreshCalendar()
  }

  prevMonth() {
  	this.month = this.month-1
  	if (this.month < 0) {
  		this.year = this.year -1
  		this.month = 11
  	}
  	this.refreshCalendar()
  }

  nextMonth() {
  	this.month = this.month + 1
  	if (this.month > 11) {
  		this.year = this.year + 1
  		this.month = 0
  	}
  	this.refreshCalendar()
  }

  refreshCalendar() {
  	this.firstDay = new Date(this.year, this.month, 1).getDay()
  	this.emptyDates = []
  	for (let i=0; i<this.firstDay; i++) {
  		this.emptyDates.push(i)
  	}
  	this.monthDays = []
  	for (let i=1; i<= new Date(this.year, this.month+1, 0).getDate(); i++) {
  		this.monthDays.push(i)
  	}
  }


}
