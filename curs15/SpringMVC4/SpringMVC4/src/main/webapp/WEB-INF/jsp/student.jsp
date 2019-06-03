<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head> <%@ page isELIgnored="false" %> </head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>User Home Page</title>
</head>
<body>
<h3>Hi ${student.name} -> ${student.college}</h3>

<form action="add" method="post">
		<input type="text" name="name"><br>
		<input type="text" name="college"><br>
		<input type="submit" value="Login">
	</form>

	 Post Result ${result}
</body>
</html>