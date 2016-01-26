class V1::EmployeeController < ApplicationController

  def index
    @employees = Employee.all
    render json: @employees
  end
end
