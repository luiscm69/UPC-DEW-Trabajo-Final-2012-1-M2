require 'test_helper'

class OwnerNotesControllerTest < ActionController::TestCase
  setup do
    @owner_note = owner_notes(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:owner_notes)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create owner_note" do
    assert_difference('OwnerNote.count') do
      post :create, owner_note: @owner_note.attributes
    end

    assert_redirected_to owner_note_path(assigns(:owner_note))
  end

  test "should show owner_note" do
    get :show, id: @owner_note
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @owner_note
    assert_response :success
  end

  test "should update owner_note" do
    put :update, id: @owner_note, owner_note: @owner_note.attributes
    assert_redirected_to owner_note_path(assigns(:owner_note))
  end

  test "should destroy owner_note" do
    assert_difference('OwnerNote.count', -1) do
      delete :destroy, id: @owner_note
    end

    assert_redirected_to owner_notes_path
  end
end
