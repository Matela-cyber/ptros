import java.util.*;
import java.io.*;

class Employee {
    int id;
    String name;
    String position;
    double salary;

    Employee(int id, String name, String position, double salary) {
        this.id = id;
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    void display() {
        System.out.println("ID: " + id);
        System.out.println("Name: " + name);
        System.out.println("Position: " + position);
        System.out.println("Salary: " + salary);
        System.out.println("----------------------");
    }
}

public class EmployeeManagementSystem {

    static ArrayList<Employee> employees = new ArrayList<>();
    static Scanner sc = new Scanner(System.in);

    static void saveToFile() {
        try {
            PrintWriter pw = new PrintWriter(new FileWriter("employees.txt"));
            for (Employee e : employees) {
                pw.println(e.id + "," + e.name + "," + e.position + "," + e.salary);
            }
            pw.close();
        } catch (Exception e) {
            System.out.println("Error saving file");
        }
    }

    static void loadFromFile() {
        try {
            File file = new File("employees.txt");
            if (!file.exists()) return;

            Scanner fileReader = new Scanner(file);
            while (fileReader.hasNextLine()) {
                String line = fileReader.nextLine();
                String[] data = line.split(",");
                employees.add(new Employee(
                        Integer.parseInt(data[0]),
                        data[1],
                        data[2],
                        Double.parseDouble(data[3])
                ));
            }
            fileReader.close();
        } catch (Exception e) {
            System.out.println("Error loading file");
        }
    }

    static void addEmployee() {
        System.out.print("Enter ID: ");
        int id = sc.nextInt();
        sc.nextLine();

        System.out.print("Enter Name: ");
        String name = sc.nextLine();

        System.out.print("Enter Position: ");
        String position = sc.nextLine();

        System.out.print("Enter Salary: ");
        double salary = sc.nextDouble();

        employees.add(new Employee(id, name, position, salary));
        saveToFile();
        System.out.println("Employee added successfully.");
    }

    static void viewEmployees() {
        if (employees.isEmpty()) {
            System.out.println("No employees found.");
            return;
        }

        for (Employee e : employees) {
            e.display();
        }
    }

    static void updateEmployee() {
        System.out.print("Enter Employee ID to update: ");
        int id = sc.nextInt();
        sc.nextLine();

        for (Employee e : employees) {
            if (e.id == id) {
                System.out.print("Enter New Name: ");
                e.name = sc.nextLine();

                System.out.print("Enter New Position: ");
                e.position = sc.nextLine();

                System.out.print("Enter New Salary: ");
                e.salary = sc.nextDouble();

                saveToFile();
                System.out.println("Employee updated.");
                return;
            }
        }

        System.out.println("Employee not found.");
    }

    static void deleteEmployee() {
        System.out.print("Enter Employee ID to delete: ");
        int id = sc.nextInt();

        Iterator<Employee> it = employees.iterator();

        while (it.hasNext()) {
            Employee e = it.next();
            if (e.id == id) {
                it.remove();
                saveToFile();
                System.out.println("Employee deleted.");
                return;
            }
        }

        System.out.println("Employee not found.");
    }

    static void totalSalary() {
        double total = 0;

        for (Employee e : employees) {
            total += e.salary;
        }

        System.out.println("Total Salary Payment: " + total);
    }

    static void report() {
        System.out.println("\n===== Employee Report =====");
        viewEmployees();
        totalSalary();
    }

    public static void main(String[] args) {

        loadFromFile();

        int choice;

        do {
            System.out.println("\n===== Employee Management System =====");
            System.out.println("1. Add Employee");
            System.out.println("2. View Employees");
            System.out.println("3. Update Employee");
            System.out.println("4. Delete Employee");
            System.out.println("5. Calculate Total Salary");
            System.out.println("6. Generate Report");
            System.out.println("7. Exit");

            System.out.print("Enter choice: ");
            choice = sc.nextInt();

            switch (choice) {
                case 1:
                    addEmployee();
                    break;
                case 2:
                    viewEmployees();
                    break;
                case 3:
                    updateEmployee();
                    break;
                case 4:
                    deleteEmployee();
                    break;
                case 5:
                    totalSalary();
                    break;
                case 6:
                    report();
                    break;
                case 7:
                    System.out.println("Exiting program...");
                    break;
                default:
                    System.out.println("Invalid choice.");
            }

        } while (choice != 7);
    }
}