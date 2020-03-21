//package com.enigma.futsalmanagement.services;
//
//import com.enigma.futsalmanagement.constants.ServiceRolesConstant;
//import com.enigma.futsalmanagement.constants.ServiceTestUsersConstants;
//import com.enigma.futsalmanagement.entites.Roles;
//import com.enigma.futsalmanagement.entites.Users;
//import com.enigma.futsalmanagement.repositories.UsersRepository;
//import org.junit.Before;
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.test.context.junit4.SpringRunner;
//import java.util.List;
//import static org.junit.Assert.assertEquals;
//
//@RunWith(SpringRunner.class)
//@SpringBootTest
//public class UserServiceImplTest {
//
//    @Autowired
//    UsersRepository usersRepository;
//    @Autowired
//    UserService userService;
//    @Autowired
//    RolesService rolesService;
//
//    @Before
//    public void cleanAll() {
//        usersRepository.deleteAll();
//    }
//
//    @Test
//    public void createUser_should_create_one_user_ADMIN() {
//        Roles roles = new Roles();
//        roles.setRolesName(ServiceRolesConstant.ROLES_NAME_ADMIN);
//        rolesService.createRoles(roles);
//        Users users = new Users();
//        users.setName(ServiceTestUsersConstants.NAME);
//        users.setUsername(ServiceTestUsersConstants.USERNAME);
//        users.setPassword(ServiceTestUsersConstants.PASSWORD);
//        users.setAddress(ServiceTestUsersConstants.ADDRESS);
//        users.setEmail(ServiceTestUsersConstants.EMAIL);
//        users.setPhoneNumber(ServiceTestUsersConstants.PHONE_NUMBER);
//        users.setIdRolesTransient(roles.getIdRoles());
//        userService.createUser(users);
//        assertEquals(1, usersRepository.findAll().size());
//    }
//
//    @Test
//    public void createUser_should_create_one_user_USER() {
//        Roles roles = new Roles();
//        roles.setRolesName(ServiceRolesConstant.ROLES_NAME_USER);
//        rolesService.createRoles(roles);
//        Users users = new Users();
//        users.setName(ServiceTestUsersConstants.NAME);
//        users.setUsername(ServiceTestUsersConstants.USERNAME);
//        users.setPassword(ServiceTestUsersConstants.PASSWORD);
//        users.setAddress(ServiceTestUsersConstants.ADDRESS);
//        users.setEmail(ServiceTestUsersConstants.EMAIL);
//        users.setPhoneNumber(ServiceTestUsersConstants.PHONE_NUMBER);
//        users.setIdRolesTransient(roles.getIdRoles());
//        userService.createUser(users);
//        assertEquals(1, usersRepository.findAll().size());
//    }
//
//    @Test
//    public void saveNewUser_should_saved_one_user_with_image_profile() {
//
//    }
//
//    @Test
//    public void findById_should_return_user_by_id() {
//        Roles roles = new Roles();
//        roles.setRolesName(ServiceRolesConstant.ROLES_NAME_USER);
//        rolesService.createRoles(roles);
//        Users users = new Users();
//        users.setName(ServiceTestUsersConstants.NAME);
//        users.setUsername(ServiceTestUsersConstants.USERNAME);
//        users.setPassword(ServiceTestUsersConstants.PASSWORD);
//        users.setAddress(ServiceTestUsersConstants.ADDRESS);
//        users.setEmail(ServiceTestUsersConstants.EMAIL);
//        users.setPhoneNumber(ServiceTestUsersConstants.PHONE_NUMBER);
//        users.setIdRolesTransient(roles.getIdRoles());
//        userService.createUser(users);
//        Users findUserById = userService.findById(users.getIdUser());
//        assertEquals(findUserById, usersRepository.findById(users.getIdUser()).get());
//    }
//
//    @Test
//    public void findById_should_return_admin_by_id() {
//        Roles roles = new Roles();
//        roles.setRolesName(ServiceRolesConstant.ROLES_NAME_ADMIN);
//        rolesService.createRoles(roles);
//        Users admin = new Users();
//        admin.setName(ServiceTestUsersConstants.NAME);
//        admin.setUsername(ServiceTestUsersConstants.USERNAME);
//        admin.setPassword(ServiceTestUsersConstants.PASSWORD);
//        admin.setAddress(ServiceTestUsersConstants.ADDRESS);
//        admin.setEmail(ServiceTestUsersConstants.EMAIL);
//        admin.setPhoneNumber(ServiceTestUsersConstants.PHONE_NUMBER);
//        admin.setIdRolesTransient(roles.getIdRoles());
//        userService.createUser(admin);
//        Users findUserById = userService.findById(admin.getIdUser());
//        assertEquals(findUserById, usersRepository.findById(admin.getIdUser()).get());
//    }
//
//    @Test
//    public void deleteUser_should_return_1_user_when_delete_user_called() {
//        Roles user = new Roles();
//        user.setRolesName(ServiceRolesConstant.ROLES_NAME_USER);
//        rolesService.createRoles(user);
//        Users users1 = new Users();
//        users1.setName(ServiceTestUsersConstants.NAME);
//        users1.setUsername(ServiceTestUsersConstants.USERNAME);
//        users1.setPassword(ServiceTestUsersConstants.PASSWORD);
//        users1.setAddress(ServiceTestUsersConstants.ADDRESS);
//        users1.setEmail(ServiceTestUsersConstants.EMAIL);
//        users1.setPhoneNumber(ServiceTestUsersConstants.PHONE_NUMBER);
//        users1.setIdRolesTransient(user.getIdRoles());
//        Users users2 = new Users();
//        users2.setName(ServiceTestUsersConstants.OTHER_NAME);
//        users2.setUsername(ServiceTestUsersConstants.OTHER_USERNAME);
//        users2.setPassword(ServiceTestUsersConstants.OTHER_PASSWORD);
//        users2.setAddress(ServiceTestUsersConstants.OTHER_ADDRESS);
//        users2.setEmail(ServiceTestUsersConstants.OTHER_EMAIL);
//        users2.setPhoneNumber(ServiceTestUsersConstants.OTHER_PHONE_NUMBER);
//        users2.setIdRolesTransient(user.getIdRoles());
//        userService.createUser(users1);
//        userService.createUser(users2);
//        userService.deleteUser(usersRepository.findById(users1.getIdUser()).get().getIdUser());
//        assertEquals(1, usersRepository.findAll().size());
//    }
//
//    @Test
//    public void deleteUser_should_return_1_admin_when_delete_user_called() {
//        Roles user = new Roles();
//        user.setRolesName(ServiceRolesConstant.ROLES_NAME_ADMIN);
//        rolesService.createRoles(user);
//        Users users1 = new Users();
//        users1.setName(ServiceTestUsersConstants.NAME);
//        users1.setUsername(ServiceTestUsersConstants.USERNAME);
//        users1.setPassword(ServiceTestUsersConstants.PASSWORD);
//        users1.setAddress(ServiceTestUsersConstants.ADDRESS);
//        users1.setEmail(ServiceTestUsersConstants.EMAIL);
//        users1.setPhoneNumber(ServiceTestUsersConstants.PHONE_NUMBER);
//        users1.setIdRolesTransient(user.getIdRoles());
//        Users users2 = new Users();
//        users2.setName(ServiceTestUsersConstants.OTHER_NAME);
//        users2.setUsername(ServiceTestUsersConstants.OTHER_USERNAME);
//        users2.setPassword(ServiceTestUsersConstants.OTHER_PASSWORD);
//        users2.setAddress(ServiceTestUsersConstants.OTHER_ADDRESS);
//        users2.setEmail(ServiceTestUsersConstants.OTHER_EMAIL);
//        users2.setPhoneNumber(ServiceTestUsersConstants.OTHER_PHONE_NUMBER);
//        users2.setIdRolesTransient(user.getIdRoles());
//        userService.createUser(users1);
//        userService.createUser(users2);
//        userService.deleteUser(usersRepository.findById(users1.getIdUser()).get().getIdUser());
//        assertEquals(1, usersRepository.findAll().size());
//    }
//
//    @Test
//    public void findAllUsers_should_return_2_user_when_findAllUsers_called() {
//        Roles user = new Roles();
//        user.setRolesName(ServiceRolesConstant.ROLES_NAME_USER);
//        rolesService.createRoles(user);
//        Users users1 = new Users();
//        users1.setName(ServiceTestUsersConstants.NAME);
//        users1.setUsername(ServiceTestUsersConstants.USERNAME);
//        users1.setPassword(ServiceTestUsersConstants.PASSWORD);
//        users1.setAddress(ServiceTestUsersConstants.ADDRESS);
//        users1.setEmail(ServiceTestUsersConstants.EMAIL);
//        users1.setPhoneNumber(ServiceTestUsersConstants.PHONE_NUMBER);
//        users1.setIdRolesTransient(user.getIdRoles());
//        Users users2 = new Users();
//        users2.setName(ServiceTestUsersConstants.OTHER_NAME);
//        users2.setUsername(ServiceTestUsersConstants.OTHER_USERNAME);
//        users2.setPassword(ServiceTestUsersConstants.OTHER_PASSWORD);
//        users2.setAddress(ServiceTestUsersConstants.OTHER_ADDRESS);
//        users2.setEmail(ServiceTestUsersConstants.OTHER_EMAIL);
//        users2.setPhoneNumber(ServiceTestUsersConstants.OTHER_PHONE_NUMBER);
//        users2.setIdRolesTransient(user.getIdRoles());
//        userService.createUser(users1);
//        userService.createUser(users2);
//        List<Users> usersList = userService.getAllUsers();
//        assertEquals(usersList, usersRepository.findAll());
//    }
//
//    @Test
//    public void findAllUsers_should_return_2_admin_when_findAllUsers_called() {
//        Roles user = new Roles();
//        user.setRolesName(ServiceRolesConstant.ROLES_NAME_ADMIN);
//        rolesService.createRoles(user);
//        Users users1 = new Users();
//        users1.setName(ServiceTestUsersConstants.NAME);
//        users1.setUsername(ServiceTestUsersConstants.USERNAME);
//        users1.setPassword(ServiceTestUsersConstants.PASSWORD);
//        users1.setAddress(ServiceTestUsersConstants.ADDRESS);
//        users1.setEmail(ServiceTestUsersConstants.EMAIL);
//        users1.setPhoneNumber(ServiceTestUsersConstants.PHONE_NUMBER);
//        users1.setIdRolesTransient(user.getIdRoles());
//        Users users2 = new Users();
//        users2.setName(ServiceTestUsersConstants.OTHER_NAME);
//        users2.setUsername(ServiceTestUsersConstants.OTHER_USERNAME);
//        users2.setPassword(ServiceTestUsersConstants.OTHER_PASSWORD);
//        users2.setAddress(ServiceTestUsersConstants.OTHER_ADDRESS);
//        users2.setEmail(ServiceTestUsersConstants.OTHER_EMAIL);
//        users2.setPhoneNumber(ServiceTestUsersConstants.OTHER_PHONE_NUMBER);
//        users2.setIdRolesTransient(user.getIdRoles());
//        userService.createUser(users1);
//        userService.createUser(users2);
//        List<Users> usersList = userService.getAllUsers();
//        assertEquals(usersList, usersRepository.findAll());
//    }
//}