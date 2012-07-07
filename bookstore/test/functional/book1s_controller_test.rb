require 'test_helper'

class Book1sControllerTest < ActionController::TestCase
  setup do
    @book1 = book1s(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:book1s)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create book1" do
    assert_difference('Book1.count') do
      post :create, book1: @book1.attributes
    end

    assert_redirected_to book1_path(assigns(:book1))
  end

  test "should show book1" do
    get :show, id: @book1
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @book1
    assert_response :success
  end

  test "should update book1" do
    put :update, id: @book1, book1: @book1.attributes
    assert_redirected_to book1_path(assigns(:book1))
  end

  test "should destroy book1" do
    assert_difference('Book1.count', -1) do
      delete :destroy, id: @book1
    end

    assert_redirected_to book1s_path
  end
end
