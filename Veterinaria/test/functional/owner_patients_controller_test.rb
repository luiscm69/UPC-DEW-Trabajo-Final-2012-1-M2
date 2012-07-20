require 'test_helper'

class OwnerPatientsControllerTest < ActionController::TestCase
  setup do
    @owner_patient = owner_patients(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:owner_patients)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create owner_patient" do
    assert_difference('OwnerPatient.count') do
      post :create, owner_patient: @owner_patient.attributes
    end

    assert_redirected_to owner_patient_path(assigns(:owner_patient))
  end

  test "should show owner_patient" do
    get :show, id: @owner_patient
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @owner_patient
    assert_response :success
  end

  test "should update owner_patient" do
    put :update, id: @owner_patient, owner_patient: @owner_patient.attributes
    assert_redirected_to owner_patient_path(assigns(:owner_patient))
  end

  test "should destroy owner_patient" do
    assert_difference('OwnerPatient.count', -1) do
      delete :destroy, id: @owner_patient
    end

    assert_redirected_to owner_patients_path
  end
end
