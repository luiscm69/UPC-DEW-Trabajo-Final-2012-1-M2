class Book1sController < ApplicationController
  # GET /book1s
  # GET /book1s.json
  def index
    @book1s = Book1.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @book1s }
    end
  end

  # GET /book1s/1
  # GET /book1s/1.json
  def show
    @book1 = Book1.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @book1 }
    end
  end

  # GET /book1s/new
  # GET /book1s/new.json
  def new
    @book1 = Book1.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @book1 }
    end
  end

  # GET /book1s/1/edit
  def edit
    @book1 = Book1.find(params[:id])
  end

  # POST /book1s
  # POST /book1s.json
  def create
    @book1 = Book1.new(params[:book1])

    respond_to do |format|
      if @book1.save
        format.html { redirect_to @book1, notice: 'Book1 was successfully created.' }
        format.json { render json: @book1, status: :created, location: @book1 }
      else
        format.html { render action: "new" }
        format.json { render json: @book1.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /book1s/1
  # PUT /book1s/1.json
  def update
    @book1 = Book1.find(params[:id])

    respond_to do |format|
      if @book1.update_attributes(params[:book1])
        format.html { redirect_to @book1, notice: 'Book1 was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @book1.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /book1s/1
  # DELETE /book1s/1.json
  def destroy
    @book1 = Book1.find(params[:id])
    @book1.destroy

    respond_to do |format|
      format.html { redirect_to book1s_url }
      format.json { head :no_content }
    end
  end
end
