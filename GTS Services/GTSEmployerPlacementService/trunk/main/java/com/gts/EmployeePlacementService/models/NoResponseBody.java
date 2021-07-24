package com.gts.EmployeePlacementService.models;

public class NoResponseBody {
	private String message;
	 private String success;
	 private Integer statusCode ;
	

	
	 public NoResponseBody(final String message, final String success, final Integer statusCode) {
			super();

			this.message = message;
			this.success = success;
			this.statusCode = statusCode;
		}

		public Integer getStatusCode() {
			return statusCode;
		}

		public void setStatusCode(final Integer statusCode) {
			this.statusCode = statusCode;
		}

		public String getSuccess() {
			return success;
		}

		public void setSuccess(final String success) {
			this.success = success;
		}

		public String getMessage() {
			return message;
		}

		public void setMessage(final String message) {
		this.message = message;
	}

	
	
	

	
   
	

}
